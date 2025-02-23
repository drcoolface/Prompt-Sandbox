"use client";
import { State } from "@/utils/types";
import { useState } from "react";
import { APIError, ValidationError } from "@/utils/errors";

export function useGenerate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const generateResponse = async (state: State) => {
    try {
      setError(null);
      setLoading(true);

      // Input validation
      if (!state.prompt?.trim()) {
        throw new ValidationError("Please enter a prompt");
      }
      if (state.prompt.trim().length < 5) {
        throw new ValidationError("Prompt must be at least 5 characters long");
      }
      if (!state.model) {
        throw new ValidationError("Please select a model");
      }

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: state.prompt,
          model: state.model,
          systemPrompt: state.systemPrompt,
          temperature: state.temperature,
          topK: state.topK,
        }),
      });

      // Handle non-200 responses
      if (!res.ok) {
        const { error: errorMessage } = await res.json();
        throw new APIError(errorMessage, res.status);
      }
      return await res.json();
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error("An unexpected error occurred");
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { generateResponse, loading, error };
}
