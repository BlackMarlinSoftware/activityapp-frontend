import { useState } from 'react';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, ResultsSummary } from './styles';
import { ActivityListingFragment } from '../../generated/graphql';
import useRouteChange from '../../hooks/useRouteChange';
import { MapViewportState } from '../../reactiveVars/map';
import NextPrevious from '../uiComponents/NextPrevious';
import { useRouter } from 'next/router';
import { updateQueryParams } from '../MapContainer/utils';

interface Props {
  activities: ActivityListingFragment[];
  totalActivities?: number;
  mapViewportState: MapViewportState;
  currentPage: number;
  maxPage: number;
}

const ActivityList = ({ activities, totalActivities, mapViewportState, currentPage, maxPage }: Props): JSX.Element => {
  const [borderBottom, setBorderBottom] = useState(false);
  const routeLoading = useRouteChange();
  const activitiesLoading = !mapViewportState.viewportLatitudeMin || routeLoading?.includes('/activities?');
  const router = useRouter();
  const updateParams = updateQueryParams(router);

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
        <h4>{totalActivities} activities</h4>
      </ResultsSummary>
      <ActivityRows onScroll={handleListScroll}>
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} loading={activitiesLoading} />
        ))}
      </ActivityRows>
      <NextPrevious
        position={currentPage}
        total={maxPage}
        onNext={() => updateParams({ page: currentPage + 1 })}
        onPrevious={() => updateParams({ page: currentPage - 1 })}
      />
    </Container>
  );
};

export default ActivityList;
