import React, { useState, useEffect } from 'react';

type TValidationSchema = {
  required?: {
    messageError: string,
  },
  pattern?: {
    test: string,
    messageError: string,
  }
};

export type TError = Partial<Record<string, string>>;
export type TUseFormValidationSchema<T extends {}> = Partial<
  Record<keyof T | string, TValidationSchema>
>;
export type TData<T extends {}> = Partial<Record<keyof T | string, string | number>>;

const useFormValidation = <T extends Record<keyof T, any> = {}> (
  data?: {
    schema?: TUseFormValidationSchema<T>,
    initData?: TData<T>,
    submit?: Function,
  },
) => {
  const [errors, setErrors] = useState<TError>({});
  const [touched, setTouched] = useState<TData<T>>({});
  const [showAllErrors, setShowAllErrors] = useState(false);
  const [values, setValues] = useState<TData<T>>({ ...data?.initData } || {});
  const [validForm, setValidForm] = useState(null);
  const schema:TUseFormValidationSchema<T> = data?.schema || {};

  const resetForm = () => {
    setShowAllErrors(false);
    setTouched({});
    setErrors({});
    setValidForm(null);
    setValues({ ...data?.initData } || {});
  };

  const validateForm = (showAll: boolean) => {
    if (schema) {
      const foundErrors: TError = {};
      Object.keys(schema).forEach((field) => {
        if (showAll || touched[field]) {
          const validate = schema[field];
          const formValue = values[field];
          if (validate?.required && (!formValue || formValue === '')) {
            foundErrors[field] = validate?.required?.messageError;
          }
          if (validate?.pattern && !RegExp(validate.pattern.test).test(formValue?.toString())) {
            foundErrors[field] = validate?.pattern?.messageError;
          }
        }
      });
      if (Object.keys(foundErrors).length) {
        setErrors(foundErrors);
        setValidForm(false);
        return false;
      }
    }
    setValidForm(true);
    setErrors({});
    return true;
  };

  useEffect(() => {
    validateForm(showAllErrors);
  }, [values, showAllErrors]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setTouched({ ...touched, [name]: true });
    setValues({ ...values, [name]: value });
    validateForm(showAllErrors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowAllErrors(true);
    const validate = validateForm(true);
    if (validate && data?.submit) data.submit();
  };

  return {
    errors,
    validateForm,
    validForm,
    resetForm,
    handleChange,
    handleSubmit,
    values,
  };
};

export default useFormValidation;
