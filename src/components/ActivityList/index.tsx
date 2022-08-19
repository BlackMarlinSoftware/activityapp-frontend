import { useState } from 'react';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, ResultsSummary } from './styles';
import { ActivityListingFragment } from '../../generated/graphql';
import useRouteChange from '../../hooks/useRouteChange';
import { MapViewportState } from '../../reactiveVars/map';

interface Props {
  activities: ActivityListingFragment[];
  mapViewportState: MapViewportState;
}

const ActivityList = ({ activities, mapViewportState }: Props): JSX.Element => {
  const [borderBottom, setBorderBottom] = useState(false);
  const routeLoading = useRouteChange();
  const activitiesLoading = !mapViewportState.viewportLatitudeMin || routeLoading?.includes('/activities?');

  const handleListScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollTop === 0) {
      setBorderBottom(false);
    } else {
      setBorderBottom(true);
    }
  };

  return (
    <Container>
      <ResultsSummary borderBottom={borderBottom}>
        <h4>{activities?.length} activities</h4>
      </ResultsSummary>
      <ActivityRows onScroll={handleListScroll}>
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} loading={activitiesLoading} />
        ))}
      </ActivityRows>
    </Container>
  );
};

export default ActivityList;
