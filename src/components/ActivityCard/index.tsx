import { ActivityContainer, ActivityDetails, Description, ActivityImage } from './styles';
import theme from '../../styles/theme';
import { Activity } from '../../types';

interface Props {
  activity: Activity;
  loading?: boolean;
}

const ActivityCard = ({ activity, loading }: Props): JSX.Element => {
  const firstImage = activity.activities_x_media[0].media;

  return (
    <ActivityContainer>
      <div>
        <ActivityImage
          src={loading ? '/TransparentPlaceholder.png' : `/images/${activity.id}/${firstImage.path}`}
          alt={firstImage.caption || undefined}
          objectFit="cover"
          objectPosition="center"
          layout="responsive"
          width={theme.scale.spacing[12]}
          height={theme.scale.spacing[11]}
        />
      </div>

      <ActivityDetails loading={loading}>
        <h4>{activity.name}</h4>
        <h5>{activity.location.name}, 0.3 km away</h5>
        <Description loading={loading}>{activity.description}</Description>
      </ActivityDetails>
    </ActivityContainer>
  );
};

export default ActivityCard;
