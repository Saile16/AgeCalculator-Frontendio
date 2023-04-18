import React from "react";

const FormInput = ({ label, error, ...otherProps }) => {
  return (
    <div className="container-input">
      <label className="label">{label}</label>
      <input {...otherProps} />
      {error ? <label className="error">{error.msj}</label> : ""}
    </div>
  );
};

export default FormInput;
