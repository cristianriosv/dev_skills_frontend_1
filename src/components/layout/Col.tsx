import React, { FC } from 'react';
import { Col as ColLibrary, ColProps } from 'react-bootstrap';

export interface TCol extends ColProps {}

const Col: FC<TCol> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}) => (
  <ColLibrary
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    xxl={xxl}
  >
    {children}
  </ColLibrary>
);

export default Col;
