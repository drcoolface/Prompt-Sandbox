"use client";

interface ParameterSliderProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
}
// Slider component adjust the parameter value
const ParameterSlider: React.FC<ParameterSliderProps> = ({
  label,
  value,
  setValue,
  min,
  max,
  step,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium  mb-1">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number.parseFloat(e.target.value))}
        className="w-full secondary-slider"
      />
      <span className="text-sm text-gray-400">{value}</span>
    </div>
  );
};

export default ParameterSlider;
