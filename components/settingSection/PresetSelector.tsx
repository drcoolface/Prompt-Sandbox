"use client";

import React, { useState, useCallback } from "react";

interface Preset {
  name: string;
  model: string;
  systemPrompt: string;
  temperature: number;
  topK: number;
}

interface PresetSelectorProps {
  presets: Preset[];
  onSelect: (preset: Preset) => void;
  onSave: (name: string) => void;
}

// Consists of preset selector dropdown and input field to save new preset
const PresetSelector: React.FC<PresetSelectorProps> = ({
  presets,
  onSelect,
  onSave,
}) => {
  const [newPresetName, setNewPresetName] = useState("");
  const [selectedPresetName, setSelectedPresetName] = useState("");

  const handleSaveNewPreset = useCallback(() => {
    if (newPresetName.trim()) {
      onSave(newPresetName.trim());
      setSelectedPresetName(newPresetName.trim());
      setNewPresetName("");
    }
  }, [newPresetName, onSave]);

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPreset = presets.find(
      (preset) => preset.name === e.target.value
    );
    if (selectedPreset) {
      setSelectedPresetName(selectedPreset.name);
      onSelect(selectedPreset);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="preset-select"
        className="block text-base font-medium mb-1 px-4"
      >
        Presets:
      </label>
      <select
        id="preset-select"
        className="w-full pl-3 pr-10 py-2 text-base border text-black rounded-md  sm:text-sm"
        onChange={handlePresetChange}
        value={selectedPresetName}
        aria-label="Select a preset"
      >
        <option value="">Select a preset</option>
        {presets.map((preset) => (
          <option key={preset.name} value={preset.name}>
            {preset.name}
          </option>
        ))}
      </select>

      <div className="mt-2 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          className="flex-grow pl-3 pr-10 py-2 text-base text-black border rounded-md  sm:text-sm"
          placeholder="New preset name"
          value={newPresetName}
          onChange={(e) => setNewPresetName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && newPresetName.trim()) {
              handleSaveNewPreset();
            }
          }}
          aria-label="New preset name"
        />
        <button
          onClick={handleSaveNewPreset}
          disabled={!newPresetName.trim()}
          aria-disabled={!newPresetName.trim()}
          className="btn-primary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PresetSelector;
