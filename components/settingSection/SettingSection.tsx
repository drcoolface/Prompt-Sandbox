"use client";
import { useSandbox } from "@/contexts/SandBoxContext";
import ModelSelector from "./ModelSelector";
import ParameterSlider from "./ParameterSlider";
import PresetSelector from "./PresetSelector";

// SettingsSection component - consists of model tuning settings and preset selector
export function SettingsSection() {
  const { state, dispatch } = useSandbox();

  return (
    <div className="flex flex-col px-2 pb-12 w-full h-[50%] md:h-full md:w-[40%] lg:w-[30%] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 mt-2 text-center">Settings</h1>
      <PresetSelector
        presets={state.presets}
        onSelect={(preset) =>
          dispatch({ type: "SELECT_PRESET", payload: preset })
        }
        onSave={(name) =>
          dispatch({
            type: "ADD_PRESET",
            payload: {
              name,
              model: state.model,
              systemPrompt: state.systemPrompt,
              temperature: state.temperature,
              topK: state.topK,
            },
          })
        }
      />
      <details className="w-full">
        <summary className="flex items-center justify-between w-full px-4 py-3 cursor-pointer rounded-lg transition-colors">
          <span className="text-base font-medium">Model Tuning:</span>
          <svg
            className="w-5 h-5 transition-transform duration-200 transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className="px-4 py-3 border-t space-y-4">
          <ModelSelector
            model={state.model}
            setModel={(model) =>
              dispatch({ type: "SET_MODEL", payload: model })
            }
          />
          <ParameterSlider
            label="Temperature"
            value={state.temperature}
            setValue={(temperature) =>
              dispatch({ type: "SET_TEMPERATURE", payload: temperature })
            }
            min={0}
            max={1}
            step={0.1}
          />
          <ParameterSlider
            label="Top K"
            value={state.topK}
            setValue={(topK) => dispatch({ type: "SET_TOP_K", payload: topK })}
            min={1}
            max={100}
            step={1}
          />
        </div>
      </details>
    </div>
  );
}
