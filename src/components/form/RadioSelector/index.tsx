import React, { FC } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

type TRadioOption = {
  id: string,
  label: string,
}
export type TRadioSelector = {
  options: TRadioOption[],
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  selected: string,
  name: string,
}

const RadioSelector: FC<TRadioSelector> = ({
  options, onChange, selected, name,
}) => (
  <ButtonGroup size="sm">
    {options.map((option) => (
      <ToggleButton
        key={option.id}
        id={`radio-${option.id}`}
        type="radio"
        // variant={idx % 2 ? 'outline-success' : 'outline-danger'}
        name={name}
        value={option.id}
        checked={selected === option.id}
        onChange={(e) => onChange && onChange(e)}
      >
        {option.label}
      </ToggleButton>
    ))}
  </ButtonGroup>
);

export default RadioSelector;
