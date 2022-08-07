import { CategoryLevel1, CategoryLevel2, CategoryLevel3 } from '../../types';

import withSvgProps from './withSvgProps';
import NoIcon from './activityIcons/NoIcon';
import Cycling from './activityIcons/Cycling';
import Active from './activityIcons/Lightning';
import Football from './activityIcons/Football';
import People from './activityIcons/People';
import Spa from './activityIcons/Spa';
import Stretching from './activityIcons/Spa';
import Dancing from './activityIcons/Dancing';
import Palette from './activityIcons/Palette';
import Scissors from './activityIcons/Scissors';
import Book from './activityIcons/Book';
import Archer from './activityIcons/Archer';
import Karate from './activityIcons/Karate';
import BilliardBall from './activityIcons/BilliardBall';
import Horse from './activityIcons/Horse';
import FishingHook from './activityIcons/FishingHook';
import Cutlery from './activityIcons/Cutlery';
import GamingController from './activityIcons/GamingController';
import GolfCourse from './activityIcons/GolfCourse';
import IceSkate from './activityIcons/IceSkate';
import TennisRacket from './activityIcons/TennisRacket';
import Athletics from './activityIcons/Athletics';
import Sailboat from './activityIcons/Sailboat';
import Snowflake from './activityIcons/Snowflake';
import Crosshairs from './activityIcons/Crosshairs';
import Shoes from './activityIcons/Shoes';
import Water from './activityIcons/Water';
import Dumbbell from './activityIcons/Dumbbell';
import SteeringWheel from './activityIcons/SteeringWheel';
import Map from './activityIcons/Map';
import PaperPlane from './activityIcons/PaperPlane';
import Shuttlecock from './activityIcons/Shuttlecock';
import TableTennisBat from './activityIcons/TableTennisBat';
import Volleyball from './activityIcons/Volleyball';
import Basketball from './activityIcons/Basketball';
import BaseballBat from './activityIcons/BaseballBat';
import CricketBat from './activityIcons/CricketBat';
import Skateboard from './activityIcons/Skateboard';
import Scooter from './activityIcons/Scooter';
import Windsurfing from './activityIcons/Windsurfing';
import Frisbee from './activityIcons/Frisbee';
import Broom from './activityIcons/Broom';
import Mountain from './activityIcons/Mountain';
import Boxing from './activityIcons/Boxing';
import Fencing from './activityIcons/Fencing';
import RugbyBall from './activityIcons/RugbyBall';
import HockeyStick from './activityIcons/HockeyStick';
import Wind from './activityIcons/Wind';
import Fan from './activityIcons/Fan';
import SwimmingPool from './activityIcons/SwimmingPool';
import SnorkelMask from './activityIcons/SnorkelMask';
import PlayingCardSpades from './activityIcons/PlayingCardSpades';
import QuestionMark from './activityIcons/QuestionMark';
import ChessKnight from './activityIcons/ChessKnight';
import Paralympic from './activityIcons/Paralympic';
import Pickaxe from './activityIcons/Pickaxe';
import Bingo from './activityIcons/Bingo';
import Pie from './activityIcons/Pie';
import FryingPan from './activityIcons/FryingPan';
import Bowl from './activityIcons/Bowl';
import VRHeadset from './activityIcons/VRHeadset';
import Massage from './activityIcons/Massage';
import Cocktail from './activityIcons/Cocktail';
import Coins from './activityIcons/Coins';
import WineGlass from './activityIcons/WineGlass';
import Easel from './activityIcons/Easel';
import TheaterMask from './activityIcons/TheaterMask';
import Cinema from './activityIcons/Cinema';
import PawPrint from './activityIcons/PawPrint';
import Baby from './activityIcons/Baby';
import X from './genericIcons/X';
import Heart from './genericIcons/Heart';
import Favorite from './genericIcons/Favorite';
import FavoriteOutline from './genericIcons/FavoriteOutline';
import Bars from './genericIcons/Bars';
import Star from './genericIcons/Star';
import Share from './genericIcons/Share';
import Home24 from './genericIcons/Home24';
import IncreasingBars24 from './genericIcons/IncreasingBars24';
import Lightning24 from './genericIcons/Lightning24';
import Tree24 from './genericIcons/Tree24';
import TreeColour from './genericIcons/TreeColour';
import LightningColour from './genericIcons/LightningColour';
import LightningColourOutline from './genericIcons/LightningColourOutline';
import HomeColour from './genericIcons/HomeColour';
import IncreasingBarsColour from './genericIcons/IncreasingBarsColour';
import PersonColour from './genericIcons/PersonColour';
import ChildColour from './genericIcons/ChildColour';
import PodiumColour from './genericIcons/PodiumColour';
import SpeedoColour from './genericIcons/SpeedoColour';
import ThermometerColour from './genericIcons/ThermometerColour';
import SofaColour from './genericIcons/SofaColour';
import MedalColour from './genericIcons/MedalColour';

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

const genericIcons: Record<string, React.FC> = {
  X: X,
  Heart: Heart,
  Favorite: Favorite,
  FavoriteOutline: FavoriteOutline,
  Bars: Bars,
  Star: Star,
  Share: Share,
  Home24: Home24,
  IncreasingBars24: IncreasingBars24,
  Lightning24: Lightning24,
  Tree24: Tree24,
  TreeColour: TreeColour,
  LightningColour: LightningColour,
  LightningColourOutline: LightningColourOutline,
  HomeColour: HomeColour,
  IncreasingBarsColour: IncreasingBarsColour,
  PodiumColour: PodiumColour,
  PersonColour: PersonColour,
  ChildColour: ChildColour,
  SpeedoColour: SpeedoColour,
  ThermometerColour: ThermometerColour,
  SofaColour: SofaColour,
  MedalColour: MedalColour,
};

const iconMap: Record<string, React.FC> = {
  ...categoryLevel1Icons,
  ...categoryLevel2Icons,
  ...categoryLevel3Icons,
  ...genericIcons,
};

interface Props {
  icon: string;
  colour?: string;
  width?: string;
  height?: string;
}

const Icon = ({ icon, colour, width = '16px', height = '16px' }: Props) => {
  const matchingIcon = Object.keys(iconMap).find((iconKey) => iconKey === icon);
  if (matchingIcon) {
    const IconComponent = withSvgProps(iconMap[matchingIcon]);
    return <IconComponent colour={colour} width={width} height={height} />;
  }
  return <div style={{ width, height }}></div>;
};

export default Icon;
