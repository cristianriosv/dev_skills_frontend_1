import React, { FC } from 'react';
import { Button as ButtonLibrary } from 'react-bootstrap';

export type TButton = {
  variant?: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
}

const Button: FC<TButton> = ({
  children, variant, className, onClick, type, disabled,
}) => (
  <ButtonLibrary
    variant={variant}
    className={className}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </ButtonLibrary>
);

export default Button;
