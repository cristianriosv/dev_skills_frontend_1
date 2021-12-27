import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewDelivery from '.';
import AppProvider from '../../providers/AppProvider';
import { Feedback } from '../../domain';
import generalTexts from '../../resources/constants/generalTexts';
// import { TData } from '../../hooks/useFormValidation';

const formCorrectData = [
  { key: 'pickupCountry', value: 'NL', type: 'combobox' },
  { key: 'pickupAddress', value: 'My mock address 1234', type: 'textbox' },
  { key: 'deliveryCountry', value: 'NL', type: 'combobox' },
  { key: 'deliveryAddress', value: 'My mock address 1234', type: 'textbox' },
  { key: 'freightType', value: 'euro', type: 'combobox' },
  { key: 'freightQuantity', value: 1, type: 'spinbutton' },
  { key: 'freightWeight', value: 1, type: 'spinbutton' },
  { key: 'freightHeight', value: 1, type: 'spinbutton' },
  { key: 'freightWidth', value: 1, type: 'spinbutton' },
  { key: 'freightDepth', value: 1, type: 'spinbutton' },
  { key: 'pickupDate', value: '2022-01-29', type: 'textbox' },
  { key: 'deliveryDate', value: '2022-03-29', type: 'textbox' },
];

describe('New Delivery form...', () => {
  const AppContainer: React.FC = () => (
    <AppProvider>
      <Feedback />
      <NewDelivery />
    </AppProvider>
  );
  it('should show New Delivery page when renders', () => {
    const { container } = render(<AppContainer />);
    expect(container).toHaveTextContent(generalTexts.newDelivery.title);
    expect(container).toHaveTextContent(generalTexts.newDelivery.description);
  });
  it('should not send form if the form is invalid', () => {
    const { container } = render(<AppContainer />);
    const button = screen.getByRole('button', { name: 'submit' });
    button.click();
    expect(container).toHaveTextContent(generalTexts.formErrors.fieldRequired);
  });
  it('should not send form if the form is invalid and only set pickupCountry', () => {
    const { container } = render(<AppContainer />);
    const input = screen.getByRole('combobox', { name: 'pickupCountry' });
    fireEvent.change(input, { target: { value: formCorrectData[0].value } });
    const button = screen.getByRole('button', { name: 'submit' });
    button.click();
    expect(input).toHaveValue(formCorrectData[0].value);
    expect(container).toHaveTextContent(generalTexts.formErrors.fieldRequired);
  });
  it('should send form if the form is valid', () => {
    const { container } = render(<AppContainer />);

    formCorrectData.forEach((changeData) => {
      const input = screen.getByRole(changeData.type, { name: changeData.key });
      fireEvent.change(input, { target: { value: changeData.value } });
      expect(input).toHaveValue(changeData.value);
    });

    const button = screen.getByRole('button', { name: 'submit' });
    button.click();

    expect(container).not.toHaveTextContent(generalTexts.formErrors.fieldRequired);
    expect(container).toHaveTextContent(generalTexts.loading);
  });
});
