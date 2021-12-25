import React, { FC } from 'react';
import Icons from './iconsPack';
import styles from './icon.module.scss';

export type TIcon = {
  color?: 'light' | 'dark',
  icon: 'plus' | 'history' | 'user' | 'truck' | 'collapse' | 'menu',
  width?: string,
  height?: string
}

const Icon: FC<TIcon> = ({
  icon,
  color = 'dark',
  width = 'auto',
  height = 'auto',
}) => {
  const IconFromPack = Icons[icon];
  return (
    <IconFromPack className={styles[color]} style={{ width, height }} />
  );
};

export default Icon;
