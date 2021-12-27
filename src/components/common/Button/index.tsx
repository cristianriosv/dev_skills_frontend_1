import React, { FC } from 'react';
import { Button as ButtonLibrary } from 'react-bootstrap';

export type TButton = {
  variant?: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  'aria-label'?: string,
}

const Button: FC<TButton> = ({
  children, variant, className, onClick, type, disabled, 'aria-label': ariaLabel,
}) => (
  <ButtonLibrary
    variant={variant}
    className={className}
    onClick={onClick}
    type={type}
    disabled={disabled}
    aria-label={ariaLabel}
  >
    {children}
  </ButtonLibrary>
);

export default Button;
