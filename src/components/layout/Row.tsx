import React, { FC } from 'react';
import { Row as RowLibrary } from 'react-bootstrap';

const Row: FC = ({ children }) => (
  <RowLibrary>
    {children}
  </RowLibrary>
);

export default Row;
