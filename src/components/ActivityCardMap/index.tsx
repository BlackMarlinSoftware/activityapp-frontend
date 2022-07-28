import {
  ActivityContainer,
  PopoverCard,
  Pin,
  ImageContainer,
  imageContainerWidth,
  imageContainerHeight,
  cardBorderRadius,
  DetailsContainer,
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
import { Activity, CategoryName } from '../../types';

interface Props {
  activity: Activity;
  focused: boolean;
}

const ActivityCardMap = ({ activity, focused }: Props): JSX.Element => {
  const categoryName = activity.activities_x_categories[0].category.name;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ActivityContainer>
        <Popover
          placement="top"
          locationId={activity.location.id}
          isOpenSetter={setIsOpen}
          render={({ close, labelId, descriptionId }) => (
            <PopoverCard>
              <ImageContainer>
                <FavoriteContainer>
                  <FavoriteOutline />
                </FavoriteContainer>

                <CloseContainer onClick={close}>
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
                <h5>{activity.name}</h5>
                <h6>Yoga class run by {activity.host.name}</h6>
              </DetailsContainer>
            </PopoverCard>
          )}
        >
          <Pin open={isOpen || focused}>
            <Icon category={categoryName as CategoryName} colour={isOpen ? 'white' : 'black'} />
          </Pin>
        </Popover>
      </ActivityContainer>
    </>
  );
};

export default ActivityCardMap;
