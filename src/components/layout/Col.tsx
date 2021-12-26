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
  className,
}) => (
  <ColLibrary
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    xxl={xxl}
    className={className}
  >
    {children}
  </ColLibrary>
);

export default Col;
