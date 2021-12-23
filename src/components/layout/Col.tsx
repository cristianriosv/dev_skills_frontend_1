import React, { FC } from 'react';
import { Col as ColLibrary } from 'react-bootstrap';

const Col: FC = ({ children }) => (
  <ColLibrary>
    {children}
  </ColLibrary>
);

export default Col;
