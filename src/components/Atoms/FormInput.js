import React from "react";

function FormInput({ label, type, value, onChange, placeholder, required, isMessage }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={isMessage ? "form-input message" : "form-input"}
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