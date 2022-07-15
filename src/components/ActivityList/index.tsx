import { useState } from 'react';
import { ActivitiesQuery } from '../../generated/graphql';
import ActivityCard from '../ActivityCard';
import { ActivityRows, Container, ResultsSummary } from './styles';

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
        <h4>{activities?.length} cycling activities in Brixton, London</h4>
        <h4>Filter TODO</h4>
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
