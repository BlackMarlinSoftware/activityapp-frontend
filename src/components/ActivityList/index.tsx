import { useState } from 'react';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, FilterTEMP, ResultsSummary } from './styles';
import { currentMapState } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { ActivityDataFragment } from '../../generated/graphql';

interface Props {
  activities: ActivityDataFragment[];
}

const ActivityList = ({ activities }: Props): JSX.Element => {
  const [borderBottom, setBorderBottom] = useState(false);
  const currentCoordinates = useReactiveVar(currentMapState);

  const handleListScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollTop === 0) {
      setBorderBottom(false);
    } else {
      setBorderBottom(true);
    }
  };

  return (
    <Container>
      <div>longitude: {currentCoordinates.longitude}</div>
      <div>latitude: {currentCoordinates.latitude}</div>
      <div>zoom level: {currentCoordinates.zoom}</div>
      <ResultsSummary borderBottom={borderBottom}>
        <h4>{activities?.length} activities</h4>
        <FilterTEMP>Filter</FilterTEMP>
      </ResultsSummary>

      <ActivityRows onScroll={handleListScroll}>
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </ActivityRows>
    </Container>
  );
};

export default ActivityList;
