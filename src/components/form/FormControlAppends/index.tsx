/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Form, InputGroup, FormControlProps } from 'react-bootstrap';

export interface IFormControl extends FormControlProps {
  postText?: string,
  preText?: string,
}

const FormControl: FC<IFormControl> = ({ postText, preText, ...rest }) => {
  const { Control } = Form;
  return (
    <InputGroup size={rest.size} className="mb-3">

      {preText && <InputGroup.Text>{preText}</InputGroup.Text>}
      <Control {...rest} />
      {postText && <InputGroup.Text>{postText}</InputGroup.Text>}
    </InputGroup>
  );
};

export default FormControl;
