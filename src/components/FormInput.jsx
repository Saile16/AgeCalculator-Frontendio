const FormInput = ({ label, errors, ...otherProps }) => {
  // console.log(errors);

  return (
    <div className="container-input">
      <label className="label">{label}</label>
      <input {...otherProps} />
      {errors ? <label className="error">{errors}</label> : ""}
    </div>
  );
};

export default FormInput;
