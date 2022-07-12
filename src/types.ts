import { ViewState } from 'react-map-gl/dist/esm/types/external';
import { ActivitiesQuery } from './generated/graphql';

export type CategoryLevel1 = 'Active' | 'Social' | 'Creative' | 'Leisure' | 'Educational' | 'Other';

export type CategoryLevel2 =
  | 'Acrobatics'
  | 'Air sports'
  | 'Archery'
  | 'Ball sports'
  | 'Board games'
  | 'Climbing'
  | 'Cycling'
  | 'Combat'
  | 'Cue sports'
  | 'Dancing'
  | 'Dogs'
  | 'Equestrian'
  | 'Food and drink'
  | 'Fishing'
  | 'Football'
  | 'Gaming'
  | 'Golf'
  | 'Gymnastics'
  | 'Yoga'
  | 'Ice sports'
  | 'Kite sports'
  | 'Parkour'
  | 'Racquet sports'
  | 'Remote control'
  | 'Running'
  | 'Sailing'
  | 'Snow sports'
  | 'Shooting'
  | 'Walking'
  | 'Watersports'
  | 'Weightlifting'
  | 'Motorsport'
  | 'Model making'
  | 'Books and reading'
  | 'Sightseeing'
  | 'Gambling';

export type CategoryLevel3 =
  | 'Breakdancing'
  | 'Cheerleading'
  | 'Latin dancing'
  | 'Ballroom dancing'
  | 'Salsa dancing'
  | 'Ice skating'
  | 'Figure skating'
  | 'Freerunning'
  | 'Trampolining'
  | 'Gliding'
  | 'Hang gliding'
  | 'Model aircraft'
  | 'Skydiving'
  | 'Wingsuit flying'
  | 'Paragliding'
  | 'Field archery'
  | 'Indoor archery'
  | 'Mounted archery'
  | 'Badminton'
  | 'Football tennis'
  | 'Five-a-side football'
  | 'Table tennis'
  | 'Tennis'
  | 'Volleyball'
  | 'Basketball'
  | 'Netball'
  | 'Baseball'
  | 'Cricket'
  | 'Orienteering'
  | 'Skateboarding'
  | 'Longboarding'
  | 'Scootering'
  | 'Snowboarding'
  | 'Surfing'
  | 'Bodyboarding'
  | 'Skimboarding'
  | 'Wakesurfing'
  | 'Windsurfing'
  | 'Paddleboarding'
  | 'Dodgeball'
  | 'Frisbee'
  | 'Quidditch'
  | 'Abseiling'
  | 'Ice climbing'
  | 'Mountaineering'
  | 'Rock climbing'
  | 'Bouldering'
  | 'Canyoning'
  | 'Coasteering'
  | 'BMX'
  | 'Mountain biking'
  | 'Velodrome'
  | 'Road biking'
  | 'Unicycling'
  | 'Aikido'
  | 'Jujutsu'
  | 'Judo'
  | 'Wrestling'
  | 'Karate'
  | 'Kickboxing'
  | 'Tai chi'
  | 'Taekwondo'
  | 'Boxing'
  | 'Muay Thai'
  | 'Fencing'
  | 'Billiards'
  | 'Pool'
  | 'Snooker'
  | 'Dressage'
  | 'Horse racing'
  | 'Polo'
  | 'Rugby'
  | 'Driving range'
  | 'Pitch and putt'
  | 'Mini golf'
  | '18-hole golf'
  | 'Ice hockey'
  | 'Kitesurfing'
  | 'Parasailing'
  | 'Kite buggy'
  | 'Triathlon'
  | 'Marathon'
  | 'Squash'
  | 'Drone'
  | 'RC racing'
  | '5K run'
  | '10K run'
  | 'Cross-country run'
  | 'Half marathon'
  | 'Sprinting'
  | 'Skiing'
  | 'Clay pigeon shooting'
  | 'Field shooting'
  | 'Air rifle shooting'
  | 'Airsoft'
  | 'Laser tag'
  | 'Paintball'
  | 'Hockey'
  | 'Lacrosse'
  | 'Hurling'
  | 'Canoeing'
  | 'Kayaking'
  | 'Rafting'
  | 'Swimming'
  | 'Scuba diving'
  | 'Snorkelling'
  | 'Freediving'
  | 'Diving'
  | 'Boating'
  | 'Darts'
  | 'Bridge'
  | 'Poker'
  | 'Quiz'
  | 'Chess'
  | 'Bunjee jumping'
  | 'Rowing'
  | 'Punting'
  | 'Wheelchair racing'
  | 'Croquet'
  | 'Boules'
  | 'Bowling'
  | 'Axe throwing'
  | 'Bingo'
  | 'Baking'
  | 'Cooking'
  | 'Crafting'
  | 'Pottery'
  | 'VR'
  | 'Escape rooms'
  | 'Massage'
  | 'Painting and drawing'
  | 'Cocktail making'
  | 'Arcade games'
  | 'Mystery games'
  | 'Treasure hunts'
  | 'Food tasting'
  | 'Wine tasting'
  | 'Rollercoasters'
  | 'Fun fairs'
  | 'Go karting'
  | 'Exhibitions'
  | 'Flower arranging'
  | 'Comedy'
  | 'Pilates'
  | 'Cinema'
  | 'Zoo'
  | 'Bootcamp'
  | 'Softplay';

export type CategoryName = CategoryLevel1 | CategoryLevel2 | CategoryLevel3;

// export interface Category {
//   name?: CategoryName;
//   parent_categories?: Category[];
// }

// export interface Host {
//   name?: string;
//   logo_url?: string | null;
// }

// export interface Amenity {
//   name?: string;
// }

// export interface Location {
//   name?: string;
//   address?: string | null;
//   postcode?: string | null;
//   lat?: number;
//   long?: number;
//   outdoors?: boolean;
//   amenities?: Amenity[];
//   directions?: string | null;
// }

// export interface Accessibility {
//   name?: 'Wheelchair User' | 'Hearing Loss' | 'Visual Impairment' | 'Motor Skills' | 'Learning Disability';
//   details?: string;
// }

// export interface Media {
//   url?: string;
//   caption?: string | null;
// }

// export type PhysicalIntensity = number | null;

// export interface Prerequisite {
//   name?: string;
//   description?: string | null;
//   activity?: Activity;
// }

// export interface Activity {
//   id?: string;
//   name?: string;
//   description?: string;
//   referral_url?: string | null;
//   referral_phone?: string | null;
//   referral_email?: string | null;
//   booking_required?: boolean;
//   prerequisites?: Prerequisite[];
//   group_size_min?: number | null;
//   group_size_max?: number | null;
//   physical_intensity_min?: PhysicalIntensity;
//   physical_intensity_max?: PhysicalIntensity;
//   age_min?: number | null;
//   age_max?: number | null;
//   host?: Host;
//   categories?: Category[];
//   location: Location;
//   accessibility?: Accessibility[];
//   media: Media[];
// }

// export interface Data {
//   activities?: Activity[];
// }

export enum LOCATIONS {
  BRIXTON = 'Brixton',
  REIGATE = 'Reigate',
}

export const initialViewStateSelection: Record<string, Partial<ViewState>> = {
  [LOCATIONS.REIGATE]: {
    latitude: 51.2362084,
    longitude: -0.2066982,
  },
  [LOCATIONS.BRIXTON]: {
    latitude: 51.4542506,
    longitude: -0.1166653,
  },
};
