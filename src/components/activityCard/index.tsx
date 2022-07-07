import { Activity } from '../../types';
import { ActivityContainer, ActivityDetails, Description, ActivityImage } from './styles';
import theme from '../../styles/theme';

interface Props {
  activity: Activity;
}

const ActivityCard = ({ activity }: Props): JSX.Element => {
  return (
    <ActivityContainer>
      <div>
        <ActivityImage
          src={`/images/${activity.id}/${activity.media[0].url}`}
          alt={activity.media[0].caption || undefined}
          layout="responsive"
          objectFit="cover"
          width={theme.scale.spacing[12]}
          height={theme.scale.spacing[11]}
        />
      </div>

      <ActivityDetails>
        <h3>{activity.name}</h3>
        <h4>{activity.location?.name}</h4>
        <Description>{activity.description}</Description>
        <h4>Operated by {activity.host?.name}</h4>
      </ActivityDetails>
    </ActivityContainer>
  );
};

export default ActivityCard;
