import {
  ActivityContainer,
  PopoverCard,
  Pin,
  ImageContainer,
  imageContainerWidth,
  imageContainerHeight,
  cardBorderRadius,
  DetailsContainer,
  FavoriteContainer,
  CloseContainer,
} from './styles';
import Icon from '../Icon';
import { Popover } from './Popover';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteOutline from '../Icon/genericIcons/FavoriteOutline';
import { ActivityListing } from '../../types';
import Link from 'next/link';

interface Props {
  activity: ActivityListing;
  focused: boolean;
}

const ActivityCardMap = ({ activity, focused }: Props): JSX.Element => {
  const categoryName = activity.activities_x_categories[0].category.name;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActivityContainer>
      <Popover
        placement="top"
        locationId={activity.location.id}
        isOpenSetter={setIsOpen}
        render={({ close, labelId, descriptionId }) => (
          <Link href={`/activity/${activity.id}`} passHref>
            <PopoverCard>
              <ImageContainer>
                <FavoriteContainer>
                  <FavoriteOutline />
                </FavoriteContainer>

                <CloseContainer
                  onClick={(event) => {
                    event.stopPropagation();
                    close();
                  }}
                >
                  <Icon icon="X" colour="hsl(0,0%,90%)" width="12px" height="12px" />
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
                <h6>Class run by {activity.host.name}</h6>
              </DetailsContainer>
            </PopoverCard>
          </Link>
        )}
      >
        <Pin open={isOpen || focused}>
          <Icon icon={categoryName} colour={isOpen ? 'white' : 'black'} />
        </Pin>
      </Popover>
    </ActivityContainer>
  );
};

export default ActivityCardMap;
