import { CategoryLevel1, CategoryLevel2, CategoryLevel3 } from '../../types';

import NoIcon from './activity-icons/NoIcon';
import Cycling from './activity-icons/Cycling';
import Active from './activity-icons/Lightning';
import Football from './activity-icons/Football';
import People from './activity-icons/People';
import Spa from './activity-icons/Spa';
import Stretching from './activity-icons/Spa';
import Dancing from './activity-icons/Dancing';
import Palette from './activity-icons/Palette';
import Scissors from './activity-icons/Scissors';
import Book from './activity-icons/Book';
import Archer from './activity-icons/Archer';
import Karate from './activity-icons/Karate';
import BilliardBall from './activity-icons/BilliardBall';
import Horse from './activity-icons/Horse';
import FishingHook from './activity-icons/FishingHook';
import Cutlery from './activity-icons/Cutlery';
import GamingController from './activity-icons/GamingController';
import GolfCourse from './activity-icons/GolfCourse';
import IceSkate from './activity-icons/IceSkate';
import TennisRacket from './activity-icons/TennisRacket';
import Athletics from './activity-icons/Athletics';
import Sailboat from './activity-icons/Sailboat';
import Snowflake from './activity-icons/Snowflake';
import Crosshairs from './activity-icons/Crosshairs';
import Shoes from './activity-icons/Shoes';
import Water from './activity-icons/Water';
import Dumbbell from './activity-icons/Dumbbell';
import SteeringWheel from './activity-icons/SteeringWheel';
import Map from './activity-icons/Map';
import PaperPlane from './activity-icons/PaperPlane';
import Shuttlecock from './activity-icons/Shuttlecock';
import TableTennisBat from './activity-icons/TableTennisBat';
import Volleyball from './activity-icons/Volleyball';
import Basketball from './activity-icons/Basketball';
import BaseballBat from './activity-icons/BaseballBat';
import CricketBat from './activity-icons/CricketBat';
import Skateboard from './activity-icons/Skateboard';
import Scooter from './activity-icons/Scooter';
import Windsurfing from './activity-icons/Windsurfing';
import Frisbee from './activity-icons/Frisbee';
import Broom from './activity-icons/Broom';
import Mountain from './activity-icons/Mountain';
import Boxing from './activity-icons/Boxing';
import Fencing from './activity-icons/Fencing';
import RugbyBall from './activity-icons/RugbyBall';
import HockeyStick from './activity-icons/HockeyStick';
import Wind from './activity-icons/Wind';
import Fan from './activity-icons/Fan';
import SwimmingPool from './activity-icons/SwimmingPool';
import SnorkelMask from './activity-icons/SnorkelMask';
import PlayingCardSpades from './activity-icons/PlayingCardSpades';
import QuestionMark from './activity-icons/QuestionMark';
import ChessKnight from './activity-icons/ChessKnight';
import Paralympic from './activity-icons/Paralympic';
import Pickaxe from './activity-icons/Pickaxe';
import Bingo from './activity-icons/Bingo';
import Pie from './activity-icons/Pie';
import FryingPan from './activity-icons/FryingPan';
import Bowl from './activity-icons/Bowl';
import VRHeadset from './activity-icons/VRHeadset';
import Massage from './activity-icons/Massage';
import Cocktail from './activity-icons/Cocktail';
import Coins from './activity-icons/Coins';
import WineGlass from './activity-icons/WineGlass';
import Easel from './activity-icons/Easel';
import TheaterMask from './activity-icons/TheaterMask';
import Cinema from './activity-icons/Cinema';
import PawPrint from './activity-icons/PawPrint';
import Baby from './activity-icons/Baby';

type CategoryLevel1Icons = Record<CategoryLevel1, React.FC>;
type CategoryLevel2Icons = Record<CategoryLevel2, React.FC>;
type CategoryLevel3Icons = Record<CategoryLevel3, React.FC>;

const categoryLevel1Icons: CategoryLevel1Icons = {
  Active: Active,
  Social: People,
  Creative: Palette,
  Leisure: Spa,
  Educational: Book,
  Other: NoIcon,
};

const categoryLevel2Icons: CategoryLevel2Icons = {
  Acrobatics: Stretching,
  'Air sports': NoIcon,
  Archery: Archer,
  'Ball sports': Football,
  'Board games': NoIcon,
  Climbing: NoIcon,
  Cycling: Cycling,
  Combat: Karate,
  'Cue sports': BilliardBall,
  Dancing: Dancing,
  Dogs: NoIcon,
  Equestrian: Horse,
  Fishing: FishingHook,
  'Food and drink': Cutlery,
  Football: Football,
  Gaming: GamingController,
  Golf: GolfCourse,
  Gymnastics: Stretching,
  Yoga: Spa,
  'Ice sports': IceSkate,
  'Kite sports': NoIcon,
  Parkour: Stretching,
  'Racquet sports': TennisRacket,
  'Remote control': GamingController,
  Running: Athletics,
  Sailing: Sailboat,
  'Snow sports': Snowflake,
  Shooting: Crosshairs,
  Walking: Shoes,
  Watersports: Water,
  Weightlifting: Dumbbell,
  Motorsport: SteeringWheel,
  'Model making': NoIcon,
  'Books and reading': Book,
  Sightseeing: Map,
  Gambling: NoIcon,
};

const categoryLevel3Icons: CategoryLevel3Icons = {
  Breakdancing: Dancing,
  Cheerleading: Dancing,
  'Latin dancing': Dancing,
  'Ballroom dancing': Dancing,
  'Salsa dancing': Dancing,
  'Ice skating': IceSkate,
  'Figure skating': IceSkate,
  Freerunning: Stretching,
  Trampolining: NoIcon,
  Gliding: NoIcon,
  Orienteering: Map,
  'Hang gliding': PaperPlane,
  'Model aircraft': PaperPlane,
  Skydiving: NoIcon,
  'Wingsuit flying': NoIcon,
  Paragliding: NoIcon,
  'Field archery': Archer,
  'Indoor archery': Archer,
  'Mounted archery': Archer,
  Badminton: Shuttlecock,
  'Football tennis': Football,
  'Five-a-side football': Football,
  'Table tennis': TableTennisBat,
  Tennis: TennisRacket,
  Volleyball: Volleyball,
  Basketball: Basketball,
  Netball: Volleyball,
  Baseball: BaseballBat,
  Cricket: CricketBat,
  Skateboarding: Skateboard,
  Longboarding: Skateboard,
  Scootering: Scooter,
  Snowboarding: Snowflake,
  Surfing: Water,
  Bodyboarding: Water,
  Skimboarding: Water,
  Wakesurfing: Water,
  Windsurfing: Windsurfing,
  Paddleboarding: Water,
  Dodgeball: Volleyball,
  Frisbee: Frisbee,
  Quidditch: Broom,
  Abseiling: Mountain,
  'Ice climbing': Mountain,
  Mountaineering: Mountain,
  'Rock climbing': Mountain,
  Bouldering: Mountain,
  Canyoning: Mountain,
  Coasteering: Mountain,
  BMX: Cycling,
  'Mountain biking': Cycling,
  Velodrome: Cycling,
  'Road biking': Cycling,
  Unicycling: Cycling,
  Aikido: Karate,
  Jujutsu: Karate,
  Judo: Karate,
  Wrestling: Karate,
  Karate: Karate,
  Kickboxing: Karate,
  'Tai chi': Karate,
  Taekwondo: Karate,
  Boxing: Boxing,
  'Muay Thai': Karate,
  Fencing: Fencing,
  Billiards: BilliardBall,
  Pool: BilliardBall,
  Snooker: BilliardBall,
  Dressage: Horse,
  'Horse racing': Horse,
  Polo: Horse,
  Rugby: RugbyBall,
  'Driving range': GolfCourse,
  'Pitch and putt': GolfCourse,
  'Mini golf': GolfCourse,
  '18-hole golf': GolfCourse,
  'Ice hockey': HockeyStick,
  Kitesurfing: Wind,
  Parasailing: Wind,
  'Kite buggy': Wind,
  Triathlon: Athletics,
  Marathon: Athletics,
  Squash: TennisRacket,
  Drone: Fan,
  'RC racing': GamingController,
  '5K run': Athletics,
  '10K run': Athletics,
  'Cross-country run': Athletics,
  'Half marathon': Athletics,
  Sprinting: Athletics,
  Skiing: Snowflake,
  'Clay pigeon shooting': Crosshairs,
  'Field shooting': Crosshairs,
  'Air rifle shooting': Crosshairs,
  Airsoft: Crosshairs,
  'Laser tag': Crosshairs,
  Paintball: Crosshairs,
  Hockey: HockeyStick,
  Lacrosse: NoIcon,
  Hurling: HockeyStick,
  Canoeing: Water,
  Kayaking: Water,
  Rafting: Water,
  Swimming: SwimmingPool,
  'Scuba diving': SnorkelMask,
  Snorkelling: SnorkelMask,
  Freediving: SnorkelMask,
  Diving: SwimmingPool,
  Boating: Sailboat,
  Darts: NoIcon,
  Bridge: PlayingCardSpades,
  Poker: PlayingCardSpades,
  Quiz: QuestionMark,
  Chess: ChessKnight,
  'Bunjee jumping': NoIcon,
  Rowing: Water,
  Punting: Water,
  'Wheelchair racing': Paralympic,
  Croquet: NoIcon,
  Boules: NoIcon,
  Bowling: NoIcon,
  'Axe throwing': Pickaxe,
  Bingo: Bingo,
  Baking: Pie,
  Cooking: FryingPan,
  Crafting: Scissors,
  Pottery: Bowl,
  VR: VRHeadset,
  'Escape rooms': QuestionMark,
  Massage: Massage,
  'Painting and drawing': Palette,
  'Cocktail making': Cocktail,
  'Arcade games': Coins,
  'Mystery games': QuestionMark,
  'Treasure hunts': Map,
  'Food tasting': Cutlery,
  'Wine tasting': WineGlass,
  Rollercoasters: NoIcon,
  'Fun fairs': NoIcon,
  'Go karting': SteeringWheel,
  Exhibitions: Easel,
  'Flower arranging': Spa,
  Comedy: TheaterMask,
  Pilates: Stretching,
  Cinema: Cinema,
  Zoo: PawPrint,
  Bootcamp: NoIcon,
  Softplay: Baby,
};

const allCategoryIcons = { ...categoryLevel1Icons, ...categoryLevel2Icons, ...categoryLevel3Icons };

export { categoryLevel1Icons, categoryLevel2Icons, categoryLevel3Icons, allCategoryIcons };
