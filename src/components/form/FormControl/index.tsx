/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import {
  Form, InputGroup, FormControlProps,
} from 'react-bootstrap';
import { FormFeedback } from '..';

export interface IFormControl extends FormControlProps {
  postText?: string,
  preText?: string,
  name?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  error?: string,
  // type?: string,
}

const FormControl: FC<IFormControl> = ({
  preText, postText, error, ...rest
}) => {
  const { Control } = Form;

  return (
    <InputGroup size={rest.size} className="mb-3">
      {preText && <InputGroup.Text>{preText}</InputGroup.Text>}
      <Control {...rest} />
      {postText && <InputGroup.Text>{postText}</InputGroup.Text>}
      {error && <FormFeedback type="invalid">{error}</FormFeedback>}
    </InputGroup>
  );
};

export default FormControl;
