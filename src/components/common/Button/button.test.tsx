import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('Button component...', () => {
  it('should have type "button" by default when no type is passed', () => {
    const { container } = render(<Button />);

    expect(container.firstChild).toHaveProperty('type', 'button');
  });
  it('should have type "submit" when no type passed is "submit"', () => {
    const { container } = render(<Button type="submit" />);

    expect(container.firstChild).toHaveProperty('type', 'submit');
  });
});
