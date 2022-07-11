import { Activity } from '../../types';
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
import { allCategoryIcons } from '../icons';
import { Popover } from './Popover';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteOutline from '../icons/genericIcons/FavoriteOutline';
import X from '../icons/genericIcons/X';

interface activityCardMapProps {
  activity: Activity;
}

const ActivityCardMap = ({ activity }: activityCardMapProps): JSX.Element => {
  // @ts-ignore
  const { [activity?.categories[0].name]: ActivityIcon } = allCategoryIcons;
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <>
      {activity && activity.media && activity.media.length > 0 ? (
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

                  {activity?.media && activity?.media?.length > 0 ? (
                    <Image
                      style={{ borderTopLeftRadius: cardBorderRadius, borderTopRightRadius: cardBorderRadius }}
                      objectFit="cover"
                      objectPosition="center"
                      width={imageContainerWidth}
                      height={imageContainerHeight}
                      src={`/images/${activity.id}/${activity.media[0].url}`}
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
                      Operated by: <span>{activity.host?.name}</span>
                    </p>
                  </ActivityOperator>
                </DetailsContainer>
              </PopoverCard>
            )}
          >
            <Pin open={isOpen}>
              <ActivityIcon colour={isOpen ? 'white' : 'black'}></ActivityIcon>
            </Pin>
          </Popover>
        </ActivityContainer>
      ) : (
        <span>Error, required activity attributes not present</span>
      )}
    </>
  );
};

export default ActivityCardMap;
