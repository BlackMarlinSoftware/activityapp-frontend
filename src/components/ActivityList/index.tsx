import { useState } from 'react';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, FilterTEMP, ResultsSummary } from './styles';
import { ActivityDataFragment } from '../../generated/graphql';
import LoadingFloat from '../uiComponents/LoadingFloat';
import useRouteChange from '../../hooks/useRouteChange';

interface Props {
  activities: ActivityDataFragment[];
}

const ActivityList = ({ activities }: Props): JSX.Element => {
  const [borderBottom, setBorderBottom] = useState(false);
  const routeLoading = useRouteChange();

  const handleListScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (event.currentTarget.scrollTop === 0) {
      setBorderBottom(false);
    } else {
      setBorderBottom(true);
    }
  };

  const activitiesLoading = routeLoading?.includes('/activities?');

  return (
    <Container>
      {activitiesLoading && <LoadingFloat />}
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
