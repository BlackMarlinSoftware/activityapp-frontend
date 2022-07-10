import { ActivitiesQuery } from '../../generated/graphql';
import { ActivityContainer, ContentContainer, ImageContainer } from './styles';
import Image from 'next/image';

interface Props {
  activity: ActivitiesQuery['activities'][0];
}

const ActivityCardMap = ({ activity }: Props): JSX.Element => {
  const firstImage = activity.activities_x_media[0];

  return (
    <ActivityContainer>
      <ImageContainer>
        {firstImage && (
          <Image
            src={`/images/${activity.id}/${firstImage.media.path}`}
            alt={firstImage.media.caption ?? ''}
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
