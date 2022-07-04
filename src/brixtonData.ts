import { CategoryName, Data } from './types';

export const brixtonData: Data = {
  activities: [
    {
      id: '57b9aff3019542daafd4777ef18d5fe6',
      name: 'Vinyasa Flow Yoga',
      description:
        'Switch off, tune in and find your flow in this popular Vinyasa practice, focusing on syncing breath to movement in a flow designed to build heat, endurance, flexibility and strength. Our sun salutations (surya namaskar) are open to all levels and all are welcome. Expect options to suit your practice whether you want to challenge yourself or take it easy. All this wrapped into 45 minutes, enough time to get your yoga fix in. Open level.',
      referral_url: 'https://www.moreyoga.co.uk/timetables/',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: 25,
      physical_intensity_min: 2,
      physical_intensity_max: 4,
      prerequisites: [],
      host: {
        name: 'More Yoga',
      },
      categories: [
        {
          name: 'Yoga',
        },
      ],
      age_min: 16,
      age_max: null,
      location: {
        name: 'More Yoga Brixton',
        address: '139 Stockwell Road',
        postcode: 'SW9 9TN',
        lat: '51.467110',
        long: '-0.117440',
        outdoors: false,
        amenities: [],
      },
      accessibility: [],
      media: [
        {
          url: 'more_yoga_brixton.jpeg',
          caption: 'The studio',
        },
      ],
    },
    {
      id: '1fb8768801da46dfb158132864da99d1',
      name: 'Velodrome Training (Intermediate)',
      description:
        'After successfully completing our Training Accreditation riders aged 14yrs+ are able to access Adult Intermediate Training, Adult Sprint Training and Race Training sessions. Intermediate Training focuses on working hard with other riders. Race Training is all about skills, tactics and learning how to race safely and successfully. Sprint training focuses on preparing riders for short, fast, sprint events, working on the skills and physicality required for this discipline. We recommended that riders regularly attend these training sessions before attempting their Race Accreditation.',
      referral_url: 'https://www.hernehillvelodrome.com/sessions',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 3,
      physical_intensity_max: 5,
      prerequisites: [
        {
          name: 'Velodrome Training Accreditation',
          description:
            'Our Training Accreditation is designed to ensure that all riders meet the required skill level to ensure they can safely participate in our  Intermediate and Race Training sessions (14yrs+)',
          activity: { id: '57b9aff3019542daafd4777ef18d5fe6' },
        },
      ],
      host: {
        name: 'Herne Hill Velodrome',
      },
      categories: [
        {
          name: 'Velodrome',
        },
      ],
      age_min: 14,
      age_max: null,
      location: {
        name: 'Herne Hill Velodrome',
        address: '104 Burbage Road',
        postcode: 'SE24 9HE',
        lat: '51.449290',
        long: '-0.091250',
        outdoors: true,
        amenities: [],
      },
      accessibility: [],
      media: [
        {
          url: 'herne_hill_velodrome_intermediate_training.jpeg',
          caption: null,
        },
      ],
    },
    {
      id: 'df9dc45089ef407b8a950e332070dcc8',
      name: 'Chinese Kickboxing (Sanda) Class',
      description:
        'Sessions taught by British Sanda Champion Joshua Villar. Learn how to fight and compete in a high octane and explosive martial art. Be pushed to your physical limit. Sanda blends the traditions of Kung Fu with modern Kickboxing, creating a fast paced, dynamic combat sport. Work with us and we’ll give you everything you need to achieve your physical goals and unlock your inner grit. Start your Sanda journey today.',
      referral_url: 'https://www.wushulondon.co.uk/contact-us-wushu-london',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 2,
      physical_intensity_max: 4,
      prerequisites: [],
      host: {
        name: 'Wushu London',
      },
      categories: [
        {
          name: 'Kickboxing',
        },
      ],
      age_min: 14,
      age_max: null,
      location: {
        name: 'Effraspace',
        address: '21 Effra Parade',
        postcode: 'SW2 1PX',
        lat: '51.456230',
        long: '-0.110140',
        outdoors: false,
        amenities: [],
      },
      accessibility: [],
      media: [
        {
          url: 'wushu_sanda.jpeg',
          caption: null,
        },
      ],
    },
    {
      id: 'b8bfa4ff6c3e46b0b5703256dcfbbecd',
      name: 'Social Chess',
      description:
        "You can play casual chess at Streatham Library every Tuesday throughout the year. We meet in the Mark Bennett Community Centre from 4.30 to 7.30 pm and players of all ages and abilities are welcome, including beginners. We ask that children under 10 are accompanied by an adult. There is nothing to pay and you don't have to be a member of Streatham & Brixton Chess Club to participate. Strong players often drop by for a few games of blitz chess and several of our Tuesday afternoon regulars also play for our league teams. Members of the informal library chess group also have the opportunity to take part in more organized events, such as club rapidplays.",
      referral_url: 'https://sites.google.com/site/chessatstreathamlibrary',
      referral_phone: null,
      referral_email: null,
      booking_required: false,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 1,
      physical_intensity_max: 1,
      prerequisites: [],
      host: {
        name: 'Chess at Streatham Library',
      },
      categories: [
        {
          name: 'Chess',
        },
      ],
      age_min: null,
      age_max: null,
      location: {
        name: 'Streatham Library',
        address: '63 Streatham High Road',
        postcode: 'SW16 1PN',
        lat: '51.414391',
        long: '-0.123880',
        outdoors: false,
        amenities: [],
      },
      accessibility: [],
      media: [
        {
          url: 'chess_streatham_library.jpeg',
          caption: null,
        },
      ],
    },
    {
      id: 'da4afecc657f4347a8e113f60aa66545',
      name: 'Ballroom and Latin for Beginners',
      description:
        'We take 2 dances every 3 weeks spending 30min on a Ballroom and 30min on a Latin dance each time. Week 1 - learn the rhythms and basics, week 2 - revise and learn new steps, week 3 - revise and practice. Over a period of 12 weeks you will learn the basics of 8 Ballroom & Latin dances and acquire the most important couple dancing skills of leading and following. Our friendly and professional teachers are fully qualified and have tons of experience to make sure you feel comfortable from lesson one. We can guarantee that you will be dancing gracefully by the end of this program!',
      referral_url: 'https://flowdance-london.co.uk/classes/timetable',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 2,
      physical_intensity_max: 3,
      prerequisites: [],
      host: {
        name: 'Flow Dance',
      },
      categories: [
        {
          name: 'Ballroom dancing',
        },
        {
          name: 'Latin dancing',
        },
        {
          name: 'Salsa dancing',
        },
      ],
      age_min: null,
      age_max: null,
      location: {
        name: 'Flow Dance Oval',
        address: 'Unit 3, Ground Floor, Kennington Business Park, Oval',
        postcode: 'SW9 6DE',
        lat: '51.480532',
        long: '-0.110138',
        outdoors: false,
        amenities: [],
        directions:
          'Enter through the main gate and keep walking towards the front building called Canterbury Court, we are on the ground floor. To find us go down the small staircase on the left hand side of the building as you face it.',
      },
      accessibility: [],
      media: [
        {
          url: 'flow_dance_ballroom.jpeg',
          caption: null,
        },
      ],
    },
    {
      id: '08739a4bb630427e9dec7b105113d8eb',
      name: 'Brockwell parkrun',
      description:
        "A free, fun, and friendly weekly 5k community event. Walk, jog, run, volunteer or spectate - it's up to you!",
      referral_url: 'https://www.parkrun.org.uk/register/?eventName=Brockwell',
      referral_phone: null,
      referral_email: null,
      booking_required: true,
      group_size_min: null,
      group_size_max: null,
      physical_intensity_min: 2,
      physical_intensity_max: 5,
      prerequisites: [],
      host: {
        name: 'parkrun',
      },
      categories: [
        {
          name: '5K run',
        },
      ],
      age_min: null,
      age_max: null,
      location: {
        name: 'Brockwell parkrun starting line',
        address: null,
        postcode: null,
        lat: '51.453608',
        long: '-0.109098',
        outdoors: true,
        amenities: [],
        directions:
          'Brockwell parkrun course is a 5km run that starts on the path near the back of the Lido, beginning with an almost-complete anti-clockwise lap of the perimeter of the park.',
      },
      accessibility: [],
      media: [
        {
          url: 'brockwell_parkrun.jpeg',
          caption: null,
        },
      ],
    },
  ],
};
