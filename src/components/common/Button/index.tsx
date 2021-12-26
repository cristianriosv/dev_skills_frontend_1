import React, { FC } from 'react';
import { Button as ButtonLibrary } from 'react-bootstrap';

export type TButton = {
  variant?: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: 'button' | 'submit' | 'reset',
}

const Button: FC<TButton> = ({
  children, variant, className, onClick, type,
}) => (
  <ButtonLibrary variant={variant} className={className} onClick={onClick} type={type}>
    {children}
  </ButtonLibrary>
);

export default Button;
