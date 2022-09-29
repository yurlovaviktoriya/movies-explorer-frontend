import './AuthInput.css';

function AuthInput({ labelText, inputType, isInputError }) {

  const inputClasses = isInputError ? "auth__input auth__input_type_error" : "auth__input";
  const spanClasses = isInputError ? "auth__input-error auth__input-error_visible" : "auth__input-error";

  return (
    <label className="auth__label">
      {labelText}
      <input className={inputClasses} type={inputType} required></input>
      <span className={spanClasses}>Что-то пошло не так...</span>
    </label>
  );
}

export default AuthInput;
