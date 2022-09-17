import {
  ActivityContainer,
  PopoverCard,
  Pin,
  ImageContainer,
  imageContainerWidth,
  imageContainerHeight,
  cardBorderRadius,
  DetailsContainer,
  // FavoriteContainer,
  CloseContainer,
  PopoverContainer,
  MultiActivitySwitcher,
} from './styles';
import Icon from '../Icon';
import { Popover } from './Popover';
import Image from 'next/image';
import { useState } from 'react';
// import FavoriteOutline from '../Icon/genericIcons/FavoriteOutline';
import { ActivityListing } from '../../types';
import Link from 'next/link';
import { activityTypeLabelMap, capitalFirstLetter } from '../../utils/activity.utils';
import useBase64Url from '../../hooks/useBase64Url';

interface PopoverProps {
  activity: ActivityListing;
  close: () => void;
}

const ActivityPopover = ({ activity, close }: PopoverProps) => {
  const currentUrlBase64 = useBase64Url();
  const activityTypeLabel = activityTypeLabelMap[activity.type];

  return (
    <Link href={`/activity/${activity.id}?backUrl=${currentUrlBase64}`} passHref>
      <PopoverCard>
        <ImageContainer>
          {/* <FavoriteContainer>
        <FavoriteOutline />
      </FavoriteContainer> */}

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
          <h6>
            {capitalFirstLetter(activityTypeLabel)} run by {activity.host.name}
          </h6>
        </DetailsContainer>
      </PopoverCard>
    </Link>
  );
};

interface Props {
  activities: ActivityListing[];
  focused: boolean;
  locationId: string;
}

const ActivityCardMap = ({ activities, focused, locationId }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivityIndex, setSelectedActivityIndex] = useState(0);

  const firstActivityCategoryName = activities[0].activities_x_categories[0].category.name;

  return (
    <ActivityContainer>
      <Popover
        placement="top"
        locationId={locationId}
        isOpenSetter={setIsOpen}
        render={({ close }) => (
          <PopoverContainer>
            <ActivityPopover close={close} activity={activities[selectedActivityIndex]} />
            {activities.length > 1 && (
              <MultiActivitySwitcher>
                {selectedActivityIndex > 0 && (
                  <h4 onClick={() => setSelectedActivityIndex((current) => current - 1)}>{'<'}</h4>
                )}
                <h4>
                  {selectedActivityIndex + 1} / {activities.length}
                </h4>
                {selectedActivityIndex < activities.length - 1 && (
                  <h4 onClick={() => setSelectedActivityIndex((current) => current + 1)}>{'>'}</h4>
                )}
              </MultiActivitySwitcher>
            )}
          </PopoverContainer>
        )}
      >
        <Pin open={isOpen || focused}>
          {activities.length === 1 ? (
            <Icon icon={firstActivityCategoryName} colour={isOpen ? 'white' : 'black'} />
          ) : (
            <h4 style={{ color: isOpen ? 'white' : 'black' }}>{activities.length}</h4>
          )}
        </Pin>
      </Popover>
    </ActivityContainer>
  );
};

export default ActivityCardMap;
