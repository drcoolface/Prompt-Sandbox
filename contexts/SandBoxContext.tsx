"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";
import { State, Action } from "@/utils/types";

// This context is used to manage the state of the sandbox page.

const initialState: State = {
  prompt: "",
  response: { content: "", metadata: "" },
  model: "gpt-3.5-turbo",
  systemPrompt: "You are a helpful AI assistant.",
  temperature: 0.7,
  topK: 50,
  presets: [
    {
      name: "Default",
      model: "gpt-3.5-turbo",
      systemPrompt: "",
      temperature: 0.7,
      topK: 50,
    },
    {
      name: "Creative",
      model: "gpt-4",
      systemPrompt: "You are a creative assistant.",
      temperature: 0.9,
      topK: 75,
    },
    {
      name: "Precise",
      model: "text-davinci-002",
      systemPrompt: "You are a precise and factual assistant.",
      temperature: 0.3,
      topK: 25,
    },
  ],
};

const SandboxContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_PROMPT":
      return { ...state, prompt: action.payload };
    case "SET_RESPONSE":
      return { ...state, response: action.payload };
    case "SET_MODEL":
      return { ...state, model: action.payload };
    case "SET_SYSTEM_PROMPT":
      return { ...state, systemPrompt: action.payload };
    case "SET_TEMPERATURE":
      return { ...state, temperature: action.payload };
    case "SET_TOP_K":
      return { ...state, topK: action.payload };
    case "ADD_PRESET":
      return { ...state, presets: [...state.presets, action.payload] };
    case "SELECT_PRESET":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function SandboxProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SandboxContext.Provider value={{ state, dispatch }}>
      {children}
    </SandboxContext.Provider>
  );
}

export function useSandbox() {
  const context = useContext(SandboxContext);
  if (!context) {
    throw new Error("useSandbox must be used within an SandboxProvider");
  }
  return context;
}
