import React, { FC } from 'react';
import { Row as RowLibrary } from 'react-bootstrap';

export type TRow = {
  className?: string
}

const Row: FC<TRow> = ({ children, className }) => (
  <RowLibrary className={className}>
    {children}
  </RowLibrary>
);

export default Row;
