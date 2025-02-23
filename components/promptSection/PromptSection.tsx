// components/PromptSection.tsx
"use client";
import { FormEvent } from "react";
import { useSandbox } from "@/contexts/SandBoxContext";
import { useGenerate } from "@/hooks/useGenerate";
import PromptInput from "./PromptInput";

export function PromptSection() {
  const { state, dispatch } = useSandbox();
  const { generateResponse, loading, error } = useGenerate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await generateResponse(state);
      dispatch({ type: "SET_RESPONSE", payload: response });
    } catch (error) {
      console.error("Failed to generate response:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
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

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">
            <strong>Error:</strong> {error.message}
          </span>
        </div>
      )}
    </div>
  );
}
