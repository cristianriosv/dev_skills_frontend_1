import generalTexts from '../constants/generalTexts';
import { TData } from '../../hooks/useFormValidation';

export const newDeliveryInitialData: TData<{}> = {
  pickupCountry: '',
  pickupAddress: '',
  deliveryCountry: '',
  deliveryAddress: '',
  freightGood: 'paper',
  freightType: 'pallet',
  freightQuantity: 0,
  freightWeight: 0,
  freightHeight: 0,
  freightWidth: 0,
  freightDepth: 0,
  pickupDate: '',
  pickupHourFrom: 8,
  pickupHourTo: 20,
  deliveryDate: '',
  deliveryHourFrom: 8,
  deliveryHourTo: 20,
};

// export const newDeliveryInitialData: TData<{}> = {
//   pickupCountry: 'NL',
//   pickupAddress: 'asdfsd asdf asdf 234234',
//   deliveryCountry: 'NL',
//   deliveryAddress: 'asdfasdf asdf asdf 234234',
//   freightGood: 'paper',
//   freightType: 'pallet',
//   freightQuantity: 1,
//   freightWeight: 1,
//   freightHeight: 1,
//   freightWidth: 1,
//   freightDepth: 1,
//   pickupDate: new Date().getTime().toString(),
//   pickupHourFrom: 8,
//   pickupHourTo: 20,
//   deliveryDate: new Date().getTime().toString(),
//   deliveryHourFrom: 8,
//   deliveryHourTo: 20,
// };

export const newDeliverySchema = {
  pickupCountry: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  pickupAddress: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '(?=(?:.*?[A-Za-z]){3})(?=(?:.*?[0-9]){1})',
      messageError: generalTexts.newDelivery.route.formErrors.address,
    },
  },
  deliveryCountry: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  deliveryAddress: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '(?=(?:.*?[A-Za-z]){3})(?=(?:.*?[0-9]){1})',
      messageError: generalTexts.newDelivery.route.formErrors.address,
    },
  },
  freightQuantity: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '^[1-9]+[0-9]*$',
      messageError: generalTexts.newDelivery.freightDetails.formErrors.quantity,
    },
  },
  freightWeight: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '^[1-9]+[0-9]*$',
      messageError: generalTexts.newDelivery.freightDetails.formErrors.weight,
    },
  },
  freightHeight: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '^[1-9]+[0-9]*$',
      messageError: generalTexts.newDelivery.freightDetails.formErrors.height,
    },
  },
  freightWidth: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '^[1-9]+[0-9]*$',
      messageError: generalTexts.newDelivery.freightDetails.formErrors.width,
    },
  },
  freightDepth: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
    pattern: {
      test: '^[1-9]+[0-9]*$',
      messageError: generalTexts.newDelivery.freightDetails.formErrors.depth,
    },
  },
  pickupDate: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  deliveryDate: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
};
