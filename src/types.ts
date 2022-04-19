export enum CategoryName {
  // Top-level categories
  'Sports',
  'Social activities',
  'Creative activities',
  // Mid-level categories
  'Acrobatic sports',
  'Air sports',
  'Archery',
  'Ball sports',
  'Board games',
  'Climbing',
  'Cycling',
  'Combat sports',
  'Cue sports',
  'Dancing',
  'Dog sports',
  'Equestrian sports',
  'Fishing',
  'Football',
  'Golf',
  'Gymnastics',
  'Yoga',
  'Ice sports',
  'Kite sports',
  'Orienteering',
  'Parkour',
  'Racquet sports',
  'Remote control',
  'Running',
  'Sailing',
  'Snow sports',
  'Shooting',
  'Walking',
  'Watersports',
  'Weightlifting',
  'Motor sports',
  'Model making',
  // Individual activity categories
  'Breakdancing',
  'Cheerleading',
  'Latin dancing',
  'Ballroom dancing',
  'Salsa dancing',
  'Ice skating',
  'Figure skating',
  'Freerunning',
  'Trampolining',
  'Gliding',
  'Hang gliding',
  'Model aircraft',
  'Skydiving',
  'Wingsuit flying',
  'Paragliding',
  'Field archery',
  'Indoor archery',
  'Mounted archery',
  'Badminton',
  'Football tennis',
  'Five-a-side football',
  'Table tennis',
  'Tennis',
  'Volleyball',
  'Basketball',
  'Netball',
  'Baseball',
  'Cricket',
  'Skateboarding',
  'Longboarding',
  'Scootering',
  'Snowboarding',
  'Surfing',
  'Bodyboarding',
  'Skimboarding',
  'Wakesurfing',
  'Windsurfing',
  'Paddleboarding',
  'Dodgeball',
  'Frisbee',
  'Quidditch',
  'Abseiling',
  'Ice climbing',
  'Mountaineering',
  'Rock climbing',
  'Bouldering',
  'Canyoning',
  'Coasteering',
  'BMX',
  'Mountain biking',
  'Velodrome',
  'Road biking',
  'Unicycling',
  'Aikido',
  'Jujutsu',
  'Judo',
  'Wrestling',
  'Karate',
  'Kickboxing',
  'Tai chi',
  'Taekwondo',
  'Boxing',
  'Muay Thai',
  'Fencing',
  'Billiards',
  'Pool',
  'Snooker',
  'Dressage',
  'Horse racing',
  'Polo',
  'Rugby',
  'Driving range',
  'Pitch and putt',
  'Mini golf',
  '18-hole golf',
  'Ice hockey',
  'Kitesurfing',
  'Parasailing',
  'Kite buggy',
  'Triathlon',
  'Marathon',
  'Squash',
  'Drone',
  'RC racing',
  '5K run',
  '10K run',
  'Cross-country running',
  'Half marathon',
  'Sprinting',
  'Skiing',
  'Clay pigeon shooting',
  'Field shooting',
  'Air rifle shooting',
  'Airsoft',
  'Laser tag',
  'Paintball',
  'Hockey',
  'Lacrosse',
  'Hurling',
  'Canoeing',
  'Kayaking',
  'Rafting',
  'Swimming',
  'Scuba diving',
  'Snorkelling',
  'Freediving',
  'Diving',
  'Boating',
  'Darts',
  'Bridge',
  'Poker',
  'Quiz',
  'Chess',
  'Bunjee jumping',
  'Rowing',
  'Punting',
  'Wheelchair racing',
  'Croquet',
  'Boules',
  'Bowling',
  'Axe throwing',
  'Bingo',
  'Baking',
  'Cooking',
  'Crafting',
  'Pottery',
  'VR',
  'Escape rooms',
  'Massage',
  'Painting and drawing',
  'Cocktail making',
  'Arcade games',
  'Mystery games',
  'Treasure hunts',
  'Food tasting',
  'Wine tasting',
  'Rollercoasters',
  'Fun fairs',
  'Go karting',
  'Exhibitions',
  'Flower arranging',
  'Comedy',
  'Pilates',
  'Cinema',
  'Zoo',
}

export interface Category {
  name: CategoryName;
  parent_category?: Category;
}

export interface Host {
  name: string;
}

export interface AgeRange {
  name: 'Babies' | '2-5 years' | '5-10 years' | '10-14 years' | '14-17 years' | 'Adults' | 'Seniors';
}

export interface Amenity {
  name: string;
}

export interface Location {
  name: string;
  address: string | null;
  postcode: string | null;
  lat_long: string;
  outdoors: boolean;
  amenities: Amenity[];
}

export interface Accessibility {
  name: 'Wheelchair User' | 'Hearing Loss' | 'Visual Impairment' | 'Motor Skills' | 'Learning Disability';
  details: string;
}

export interface Media {
  url: string;
  caption: string | null;
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  default_max_group_size: number;
  referral_url: string | null;
  referral_phone: string | null;
  referral_email: string | null;
  default_intensity: number;
  host: Host;
  category: Category;
  age_ranges: AgeRange[];
  location: Location;
  accessibility: Accessibility[];
  media: Media[];
}

export interface Data {
  activities: Activity[];
}
