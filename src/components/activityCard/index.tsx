import { Activity } from '../../types';
import { ActivityContainer, ImageContainer, ContentContainer, Image } from './styles';
import { allCategoryIcons } from '../icons/index';
import NoIcon from '../icons/activity-icons/NoIcon';

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
        <h6>{activity.location?.address}</h6>
        <p>{activity.description}</p>
        <h6>Operated by {activity.host?.name}</h6>

        {activity.categories?.map(({ name }) => {
          const CategoryIcon = name ? allCategoryIcons[name] : NoIcon;
          return (
            <div key={name} style={{ display: 'flex' }}>
              <CategoryIcon />
              <p>{name}</p>
            </div>
          );
        })}
      </ContentContainer>
    </ActivityContainer>
  );
};

export default ActivityCard;
