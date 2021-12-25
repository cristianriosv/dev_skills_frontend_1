import React, { FC } from 'react';
import { Button, Icon } from '../../../components/common';
import styles from './buttonToggle.module.scss';

type TButtonToggle = {
  toggleMenu: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const ButtonToggle: FC<TButtonToggle> = ({ toggleMenu, onClick }) => (
  <Button
    onClick={onClick}
    className={`${styles.button}`}
    variant="link"
  >
    {toggleMenu
      ? <Icon color="light" icon="collapse" width="15px" />
      : <Icon color="light" icon="menu" width="20px" />}
  </Button>
);

export default ButtonToggle;
