import React, { FC } from 'react';
import { Container as ContainerLibrary } from 'react-bootstrap';

const Container: FC = ({ children }) => (
  <ContainerLibrary>
    {children}
  </ContainerLibrary>
);

export default Container;
