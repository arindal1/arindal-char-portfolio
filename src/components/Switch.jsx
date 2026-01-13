import React from "react";
import "../styles/switch.css";

export default function Switch({ checked, onChange, disabled = false }) {
  return (
    <label className={`switch ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
      />
      <span className="slider" />
    </label>
  );
}
