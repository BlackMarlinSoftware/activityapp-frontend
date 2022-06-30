import { CategoryName, Data } from './types';

export const brixtonData: Data = {
  activities: [
    {
      id: '57b458c4-dc6e-49b9-aeeb-88967fba8c2c',
      name: 'Very Yoga Reigate',
      description:
        'Heat, Healing, Health.\n' +
        'We offer a range of innovative yoga classes in our High Street studio based in Reigate, Surrey. We welcome people from all backgrounds and abilities into our oasis of calm.\n' +
        'From Bikram to Vinyasa Flow, Very Yoga Reigate has the class to suit your mood and ability taught by our host of welcoming teachers.',
      referral_url: 'https://veryyogareigate.com/',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 1,
      physical_intensity_max: 3,
      prerequisites: [],
      host: {
        name: 'Very Yoga Reigate',
      },
      categories: [
        {
          name: CategoryName.Yoga,
        },
      ],
      age_min: 16,
      age_max: null,
      location: {
        name: 'More Yoga Brixton',
        address: 'Focus House, 23-25 Bell St',
        postcode: 'RH2 7AD',
        lat: '51.2371524',
        long: '-0.2751997',
        outdoors: false,
        amenities: [],
      },
      accessibility: [],
      media: [
        {
          url: 'activity-images/57b458c4-dc6e-49b9-aeeb-88967fba8c2c/1.jpeg',
          caption: 'The studio',
        },
      ],
    },
  ],
};
