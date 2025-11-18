import { useState } from "react";

const SwitchToggle = ({ 
  label = "",
  defaultChecked = false,
  labelColor,
  size = "medium",   // 👈 Default size
  onChange 
}) => {
  
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = (e) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e.target.checked);
  };

  return (
    <div className={`form-check form-switch switch-${size}`}>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="customSwitchToggle"
        checked={checked}
        onChange={handleToggle}
      />

      {label && (
        <label 
          className="form-check-label" 
          htmlFor="customSwitchToggle"
          style={{ color: labelColor || "inherit" }}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default SwitchToggle;
