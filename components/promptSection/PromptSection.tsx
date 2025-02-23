"use client";
import { FormEvent } from "react";
import { useSandbox } from "@/contexts/SandBoxContext";
import { useGenerate } from "@/hooks/useGenerate";
import PromptInput from "./PromptInput";

// PromptSection component - consists prompt input fields for user and system prompts
// and a button to generate response
export function PromptSection() {
  const { state, dispatch } = useSandbox();
  const { generateResponse, loading } = useGenerate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await generateResponse(state);
      dispatch({ type: "SET_RESPONSE", payload: response });
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:mb-4">
      <div className="flex-1">
        <PromptInput
          title="User Prompt"
          placeholder="Add user prompt here..."
          prompt={state.prompt}
          setPrompt={(prompt) =>
            dispatch({ type: "SET_PROMPT", payload: prompt })
          }
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-secondary"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>
      <div className="flex-1">
        <PromptInput
          title="System Prompt"
          placeholder="Add a system prompt here..."
          prompt={state.systemPrompt}
          setPrompt={(prompt) =>
            dispatch({ type: "SET_SYSTEM_PROMPT", payload: prompt })
          }
        />
      </div>
    </div>
  );
}
