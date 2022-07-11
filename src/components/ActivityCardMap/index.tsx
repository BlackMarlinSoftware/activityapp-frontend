import { Activity } from '../../types';
import { ActivityContainer, ContentContainer, ImageContainer } from './styles';
import Image from 'next/image';

interface activityCardMapProps {
  activity: Activity;
}

const ActivityCardMap = ({ activity }: activityCardMapProps): JSX.Element => {
  return (
    <ActivityContainer>
      <ImageContainer>
        {activity.media?.length && (
          <Image
            src={`/images/${activity.id}/${activity.media[0].url}`}
            alt={activity.media[0].caption ?? ''}
            layout="responsive"
            width={100}
            height={100}
          />
        )}
      </ImageContainer>
      <ContentContainer>
        <h5>{activity.name}</h5>
      </ContentContainer>
    </ActivityContainer>
  );
};

export default ActivityCardMap;
