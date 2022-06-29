import {Activity, CategoryName} from '../../types';
import styles from './styles.module.css';

interface activityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: activityCardProps): JSX.Element => {
  return <div className={styles.container}>
    <h2>{activity.name}</h2>
    <p>Categories: {activity.categories?.map(({ name }) => (name ? CategoryName[name] : '')).join(', ')}</p>
    <p>Description: {activity.description}</p>
    <p>Location: {activity.location?.name}</p>
    <p>Run by: {activity.host?.name}</p>
    <p>
      <a href={activity.referral_url || ''} target="_blank" rel="noreferrer">
        Book now
      </a>
    </p>
  </div>;
};

export default ActivityCard;
