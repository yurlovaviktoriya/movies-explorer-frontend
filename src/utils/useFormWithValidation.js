import { useState, useCallback } from 'react';
import validator from 'validator';

export function useFormWithValidation( initialValues = {} ) {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const enableValidation = (target) => {
    if (target.name.includes('Password')) {
      return target.validationMessage;
    } else if (target.name.includes('Name')) {
      return validateName(target.value);
    } else if (target.name.includes('Email')) {
      return validateEmail(target.value);
    };
    return target.validationMessage;
  };

  const validateName = (name) => {
    const regexName = /[^a-zа-яё -]/iu;
    if (name.length < 2 ) {
      return 'Имя не должно быть короче двух символов.';
    } else if (name.length > 30) {
      return 'Имя не должно быть длинее 30 символов';
    } else if (regexName.test(name)) {
      return 'Имя должно содержать только латиницу, кириллицу, пробел или дефис.';
    };

    return '';
  };
  
  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return 'Неправильный Email.';
    };
    return '';
  };

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: enableValidation(target) });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
};
