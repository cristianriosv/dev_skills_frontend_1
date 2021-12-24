import React, { FC } from 'react';
import { Container as ContainerLibrary } from 'react-bootstrap';

export type TContainer = {
  fluid?: boolean
}

const Container: FC<TContainer> = ({ children, fluid = false }) => (
  <ContainerLibrary fluid={fluid}>
    {children}
  </ContainerLibrary>
);

export default Container;
