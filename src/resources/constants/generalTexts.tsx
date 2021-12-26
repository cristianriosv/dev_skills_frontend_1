const generalTexts = {
  topBar: {
    userData: 'User name',
  },
  sideBar: {
    links: {
      newDelivery: 'New Delivery',
      myDeliveries: 'My Deliveries',
      history: 'History',
    },
  },
  newDelivery: {
    sendDelivery: 'Schedule Delivery',
    resetForm: 'Reset form',
    route: {
      title: 'Route',
      pickup: 'Pickup',
      delivery: 'Delivery',
      addressPlaceholder: 'Address',
      countryPlaceholder: 'Select Country',
      formErrors: {
        selectCountry: 'You need to select a country',
        address: 'Doesn\'t look like an address',
      },
    },
    freightDetails: {
      title: 'Freight details',
      typeOfGoods: 'Type of goods',
      paper: 'Paper',
      plastic: 'Plastic',
      textil: 'Textil',
      other: 'Other',
      volume: 'Volume',
      quantity: 'Quantity',
      pallet: 'Pallet',
      depth: 'Depth (cm)',
      width: 'Width (cm)',
      height: 'Height (cm)',
      weight: 'Weight',
      weightUnit: 'Kg',
      formErrors: {
        quantity: 'Please indicate quantity',
        weight: 'Please indicate weight',
        depth: 'Please indicate depth',
        width: 'Please indicate depth',
        height: 'Please indicate depth',
      },
    },
    dateAndTime: {
      title: 'Date & Time',
      pickupDate: 'Pickup Date',
      deliveryDate: 'Delivery Date',
      formError: {
        pickupDate: 'Please select pickup date',
        deliveryDate: 'Please select delivery date',
      },
    },
  },
  loading: 'Cargando...',
  formErrors: {
    fieldRequired: 'This field is required',
  },
};

export default generalTexts;
