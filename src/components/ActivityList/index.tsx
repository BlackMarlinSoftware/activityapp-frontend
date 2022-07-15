import { useState } from 'react';
import { ActivitiesQuery } from '../../generated/graphql';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, FilterTEMP, ResultsSummary } from './styles';

interface Props {
  activities: ActivitiesQuery['activities'];
}

const ActivityList = ({ activities }: Props): JSX.Element => {
  const [borderBottom, setBorderBottom] = useState(false);

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
