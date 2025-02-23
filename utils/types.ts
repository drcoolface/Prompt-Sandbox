export interface Response {
  content: string;
  metadata: string;
}

export interface Preset {
  name: string;
  model: string;
  systemPrompt: string;
  temperature: number;
  topK: number;
}

export interface State {
  prompt: string;
  response: Response;
  model: string;
  systemPrompt: string;
  temperature: number;
  topK: number;
  presets: Preset[];
}
export type Action =
  | { type: "SET_PROMPT"; payload: string }
  | { type: "SET_RESPONSE"; payload: Response }
  | { type: "SET_MODEL"; payload: string }
  | { type: "SET_SYSTEM_PROMPT"; payload: string }
  | { type: "SET_TEMPERATURE"; payload: number }
  | { type: "SET_TOP_K"; payload: number }
  | { type: "ADD_PRESET"; payload: Preset }
  | { type: "SELECT_PRESET"; payload: Preset };
