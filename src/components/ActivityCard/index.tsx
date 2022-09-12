import { ActivityContainer, ActivityDetails, Description, ActivityImage } from './styles';
import theme from '../../styles/theme';
import { ActivityListing } from '../../types';
import Link from 'next/link';
import { activityTypeLabelMap, capitalFirstLetter } from '../../utils/activity.utils';

interface Props {
  activity: ActivityListing;
  loading?: boolean | undefined;
}

const ActivityCard = ({ activity, loading }: Props): JSX.Element => {
  const firstImage = activity.activities_x_media[0].media;
  const activityTypeLabel = capitalFirstLetter(activityTypeLabelMap[activity.type]);

  return (
    <Link href={`/activity/${activity.id}`} passHref>
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

        <ActivityDetails $loading={!!loading}>
          <h4>{activity.name}</h4>
          <h5>
            {activityTypeLabel} run by {activity.host.name}
          </h5>
          <Description $loading={!!loading}>{activity.description}</Description>
        </ActivityDetails>
      </ActivityContainer>
    </Link>
  );
};

export default ActivityCard;
