"use client";
interface ModelSelectorProps {
  model: string;
  setModel: (model: string) => void;
}
// Consists of various model options to select from
const ModelSelector: React.FC<ModelSelectorProps> = ({ model, setModel }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium  mb-1">Model Name:</label>
      <select
        className="w-full py-2 text-base text-black sm:text-sm rounded-md"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
        <option value="text-davinci-002">Text Davinci 002</option>
      </select>
    </div>
  );
};

export default ModelSelector;
