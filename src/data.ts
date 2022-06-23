import { CategoryName, Data } from './types';

export const data: Data = {
  activities: [
    {
      id: 1,
      name: 'Brockwell Park Archery Afternoon',
      description:
        'Come along for a whole afternoon of archery in the park. Try modern equipment as well as replicas of medieval designs.',
      referral_url: 'https://brockwellarchery.com/book',
      referral_phone: null,
      referral_email: null,
      default_max_group_size: 15,
      default_intensity: 3,
      default_experience_level: 2,
      host: {
        name: 'Archery UK Ltd.',
      },
      categories: [
        {
          name: CategoryName['Field archery'],
          parent_category: {
            name: CategoryName.Archery,
            parent_category: {
              name: CategoryName.Sports,
            },
          },
        },
      ],
      default_age_range: { from: 14, to: null },
      location: {
        name: 'Brockwell Park Ranges',
        address: null,
        postcode: null,
        lat_long: '51.44906847210326, -0.10934054035084453',
        outdoors: true,
        amenities: [
          {
            name: 'Toilets',
          },
          {
            name: 'Accessible Toilets',
          },
          {
            name: 'Catering',
          },
          {
            name: 'Seating',
          },
        ],
      },
      accessibility: [
        {
          name: 'Wheelchair User',
          details: 'Entrance via ramp is available. Specialised bows and quivers are on-site for wheelchair users.',
        },
        {
          name: 'Hearing Loss',
          details:
            'All of our instructors have RNID basic training. Josh is fluent in BSL and leads the courses on Wednesdays.',
        },
      ],
      media: [
        {
          url: 'https://images.com/xyz',
          caption: 'Group sessions',
        },
        {
          url: 'https://images.com/abc',
          caption: 'A medieval model bow',
        },
        {
          url: 'https://images.com/dfg',
          caption: 'A newer model bow',
        },
      ],
    },
  ],
};
