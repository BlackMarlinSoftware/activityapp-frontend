import { ActivityContainer, ActivityDetails, Description, ActivityImage } from './styles';
import theme from '../../styles/theme';
import { ActivityListing } from '../../types';
import Link from 'next/link';
import { activityTypeLabelMap } from '../../utils/activity.utils';
import useBase64Url from '../../hooks/useBase64Url';

interface Props {
  activity: ActivityListing;
  loading?: boolean | undefined;
}

const ActivityCard = ({ activity, loading }: Props): JSX.Element => {
  const firstImage = activity.activities_x_media[0].media;
  const activityTypeLabel = activityTypeLabelMap[activity.type];
  const currentUrlBase64 = useBase64Url();

  return (
    <Link href={`/activity/${activity.id}?backUrl=${currentUrlBase64}`} passHref>
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
