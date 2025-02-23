"use client";
import { State } from "@/utils/types";
import { useState } from "react";

export function useGenerate() {
  const [loading, setLoading] = useState(false);

  const generateResponse = async (state: State): Promise<any> => {
    if (state.prompt.length < 5) {
      throw new Error("Please add a valid prompt before generating.");
    }

    setLoading(true);
    try {
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
      return await res.json();
    } finally {
      setLoading(false);
    }
  };

  return { generateResponse, loading };
}
