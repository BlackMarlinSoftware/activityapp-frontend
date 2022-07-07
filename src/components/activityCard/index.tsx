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
        <h4>{activity.name}</h4>
        <h5>{activity.location?.name}</h5>
        <Description>{activity.description}</Description>
        <h5>Run by {activity.host?.name}</h5>
      </ActivityDetails>
    </ActivityContainer>
  );
};

export default ActivityCard;
