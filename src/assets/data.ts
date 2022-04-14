export const data: any = {
  activities: [
    {
      id: 1,
      name: 'Brockwell Park Archery Afternoon',
      description:
        'Come along for a whole afternoon of archery in the park. Try modern equipment as well as replicas of medieval designs.',
      default_max_group_size: 15,
      referral_url: 'https://brockwellarchery.com/book',
      referral_phone: null,
      referral_email: null,
      default_intensity: 3,
      host: {
        name: 'Archery UK Ltd.',
      },
      category: {
        name: 'Archery',
        parent_category: {
          name: 'Sports',
        },
      },
      age_ranges: [
        {
          name: 'Teenagers',
        },
        {
          name: 'Adults',
        },
        {
          name: 'Seniors',
        },
      ],
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
          name: 'Wheelchair Accessible',
          details: 'Entrance via ramp is available. Specialised bows and quivers are on-site for wheelchair users.',
        },
        {
          name: 'Deaf Friendly',
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
