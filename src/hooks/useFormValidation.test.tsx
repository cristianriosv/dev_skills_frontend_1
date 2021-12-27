import * as React from 'react';
import { render, act } from '@testing-library/react';
import useFormValidation, { TUseFormValidationSchema, TData, TError } from './useFormValidation';

describe('Hook useFormValidation...', () => {
  const setup = <T extends Record<keyof T, any> = {}>(
    data?: {
      schema?: TUseFormValidationSchema<T>,
      initData?: TData<T>,
      submit?: Function,
    },
  ) => {
    type TReturn = {
      errors: TError,
      validForm: boolean,
      resetForm: () => void,
      handleChange: (e:React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void,
      handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void,
      values: TData<T>,
    }
    const returnVal:TReturn = {
      errors: {},
      validForm: true,
      handleChange: () => {},
      values: {},
      handleSubmit: () => {},
      resetForm: () => {},
    };
    const TestComponent: React.FC = () => {
      Object.assign(returnVal, useFormValidation({ ...data }));
      return null;
    };
    render(<TestComponent />);
    return returnVal;
  };

  const mockData = { initData: { name: 'Thomas', age: 23 } };
  const mockSchemaData = {
    name: { required: { messageError: 'Name required' } },
    age: { pattern: { test: '^[1-9]+[0-9]*$', messageError: 'Wrong age' } },
  };

  it('should return valid Form when no data is passed', () => {
    const hookData = setup();
    expect(hookData.validForm).toBeTruthy();
  });

  it('should return valid Form and the same values when initial data is passed without schema', () => {
    const hookData = setup(mockData);
    expect(hookData.validForm).toBeTruthy();
    expect(hookData.values).toEqual(mockData.initData);
  });

  it('should change name value when handle change from input', () => {
    const hookData = setup(mockData);
    const newName = 'Thomas Gonzalez';
    act(() => {
      hookData.handleChange({
        target: { value: newName, name: 'name' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    expect(hookData.values).not.toEqual(mockData.initData);
    expect(hookData.values).toEqual({ ...mockData.initData, name: newName });
  });

  it('should return invalid form when the name is required and is empty or not defined, and must return the errors object with error description', () => {
    const hookData = setup({ ...mockData, schema: mockSchemaData });
    act(() => {
      hookData.handleChange({
        target: { value: 'Thom', name: 'name' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    act(() => {
      hookData.handleChange({
        target: { value: '', name: 'name' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    expect(hookData.validForm).not.toBeTruthy();
    expect(hookData.errors).toEqual({ name: mockSchemaData.name.required.messageError });
  });

  it('should return invalid when pattern doesn\'t pass test', () => {
    const hookData = setup({ ...mockData, schema: mockSchemaData });
    const newAge = 'A23';
    act(() => {
      hookData.handleChange({
        target: { value: '', name: 'age' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    act(() => {
      hookData.handleChange({
        target: { value: newAge, name: 'age' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    expect(hookData.validForm).not.toBeTruthy();
    expect(hookData.errors).toEqual({ age: mockSchemaData.age.pattern.messageError });
  });

  it('should call submit action when form is valid', () => {
    const onSubmit = jest.fn(() => {});
    const hookData = setup({ ...mockData, submit: onSubmit });
    act(() => {
      hookData.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    });
    expect(onSubmit.mock.calls.length).toBe(1);
  });

  it('should not call submit action when form is invalid', () => {
    const onSubmit = jest.fn(() => {});
    const hookData = setup({ initData: { name: '' }, schema: mockSchemaData, submit: onSubmit });
    act(() => {
      hookData.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    });
    expect(onSubmit.mock.calls.length).toBe(0);
  });

  it('should reset state when reset action is called', () => {
    const hookData = setup(mockData);
    act(() => {
      hookData.handleChange({
        target: { value: '25', name: 'age' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    act(() => {
      hookData.handleChange({
        target: { value: 'Alexa', name: 'name' },
      } as React.ChangeEvent<HTMLInputElement & HTMLSelectElement>);
    });
    act(() => {
      hookData.resetForm();
    });
    expect(hookData.values).toEqual(mockData.initData);
    expect(hookData.errors).toEqual({});
  });
});
