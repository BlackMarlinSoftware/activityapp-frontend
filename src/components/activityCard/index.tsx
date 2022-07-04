import { Activity } from '../../types';
import { allCategoryIcons } from '../icons';
import NoIcon from '../icons/activity-icons/NoIcon';
import { ActivityContainer, ImageContainer, ContentContainer, Image } from './styles';

interface activityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: activityCardProps): JSX.Element => {
  return (
    <ActivityContainer>
      <ImageContainer>
        {activity.media?.length && (
          <Image src={`/images/${activity.id}/${activity.media[0].url}`} alt={activity.media[0].caption ?? ''} />
        )}
      </ImageContainer>
      <ContentContainer>
        <h5>{activity.name}</h5>
        <h6>{activity.location?.name}</h6>
        <p>{activity.description}</p>
        <h6>Operated by {activity.host?.name}</h6>
      </ContentContainer>
    </ActivityContainer>
  );
};

export default ActivityCard;
