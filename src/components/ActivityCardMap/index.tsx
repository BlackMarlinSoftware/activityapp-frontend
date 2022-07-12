import { ActivitiesQuery } from '../../generated/graphql';
import {
  ActivityContainer,
  PopoverCard,
  Pin,
  ImageContainer,
  imageContainerWidth,
  imageContainerHeight,
  cardBorderRadius,
  DetailsContainer,
  ActivityTitle,
  ActivityDescription,
  ActivityOperator,
  FavoriteContainer,
  CloseContainer,
} from './styles';
import Icon from '../Icon';
import { Popover } from './Popover';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteOutline from '../Icon/genericIcons/FavoriteOutline';
import X from '../Icon/genericIcons/X';

interface Props {
  activity: ActivitiesQuery['activities'][0];
}

const ActivityCardMap = ({ activity }: Props): JSX.Element => {
  const categoryName = activity.activities_x_categories[0].category.name;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ActivityContainer>
        <Popover
          placement="top"
          isOpenSetter={setIsOpen}
          render={({ close, labelId, descriptionId }) => (
            <PopoverCard>
              <ImageContainer>
                <FavoriteContainer>
                  <FavoriteOutline />
                </FavoriteContainer>

                <CloseContainer>
                  <X colour="hsl(0,0%,90%)" />
                </CloseContainer>

                {activity.activities_x_media.length > 0 ? (
                  <Image
                    src={`/images/${activity.id}/${activity.activities_x_media[0].media.path}`}
                    alt={activity.activities_x_media[0].media.caption || 'Activity image'}
                    style={{ borderTopLeftRadius: cardBorderRadius, borderTopRightRadius: cardBorderRadius }}
                    objectFit="cover"
                    objectPosition="center"
                    width={imageContainerWidth}
                    height={imageContainerHeight}
                  />
                ) : null}
              </ImageContainer>
              <DetailsContainer>
                <ActivityTitle>
                  <p>{activity.name}</p>
                </ActivityTitle>
                <ActivityDescription>
                  <p>{activity.description}</p>
                </ActivityDescription>
                <ActivityOperator>
                  <p>
                    Operated by: <span>{activity.host.name}</span>
                  </p>
                </ActivityOperator>
              </DetailsContainer>
            </PopoverCard>
          )}
        >
          <Pin open={isOpen}>
            <Icon icon={categoryName} colour={isOpen ? 'white' : 'black'} />
          </Pin>
        </Popover>
      </ActivityContainer>
      )
    </>
  );
};

export default ActivityCardMap;
