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
  },
  freightQuantity: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  freightWeight: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  freightHeight: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  freightWidth: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
    },
  },
  freightDepth: {
    required: {
      messageError: generalTexts.formErrors.fieldRequired,
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
