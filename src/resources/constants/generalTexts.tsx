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
    title: 'New Delivery',
    description: 'Here you can schedule a new delivery, you have to specify the pickup and delivery route, the freight details, and pickup/delivery date and time available.',
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
        quantity: 'Quantity not valid',
        weight: 'Weight not valid',
        depth: 'Depth not valid',
        width: 'Width not valid',
        height: 'Height not valid',
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
    success: {
      title: 'Delivery scheduled!',
      description: 'You have scheduled a new delivery, achieved one less truck on the roads and saved 35 kg of CO2',
    },
  },
  myDeliveries: {
    title: 'My Deliveries',
    description: 'Here you can view your active current deliveries.',
  },
  history: {
    title: 'History',
    description: 'Here you can view your completed deliveries.',
  },
  loading: 'Loading...',
  formErrors: {
    fieldRequired: 'This field is required',
  },
};

export default generalTexts;
