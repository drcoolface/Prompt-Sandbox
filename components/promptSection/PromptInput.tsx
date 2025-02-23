"use client";
interface SystemPromptProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  title: string;
  placeholder: string;
}

const PromptInput: React.FC<SystemPromptProps> = ({
  prompt,
  setPrompt,
  title,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">{title}:</label>
      <textarea
        className="w-full p-2 border rounded  resize-y text-gray-800 "
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder}
        rows={4}
      />
    </div>
  );
};

export default PromptInput;
