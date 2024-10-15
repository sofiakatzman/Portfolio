import React from "react";

function FormInput({ label, type, value, onChange, placeholder, required }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;