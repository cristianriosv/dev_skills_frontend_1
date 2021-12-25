import React, { FC } from 'react';
import { Button as ButtonLibrary } from 'react-bootstrap';

export type TButton = {
  variant?: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<TButton> = ({
  children, variant, className, onClick,
}) => (
  <ButtonLibrary variant={variant} className={className} onClick={onClick}>
    {children}
  </ButtonLibrary>
);

export default Button;
