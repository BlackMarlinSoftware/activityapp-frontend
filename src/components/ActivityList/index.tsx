import { ActivitiesQuery } from '../../generated/graphql';
import ActivityCard from '../ActivityCard';
import { ActivityRows, ListArea } from './styles';

interface Props {
  activities: ActivitiesQuery['activities'];
}

const ActivityList = ({ activities }: Props): JSX.Element => (
  <ListArea>
    <h4>{activities?.length} cycling activities in Brixton, London</h4>

    <ActivityRows>
      {activities.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </ActivityRows>
  </ListArea>
);

export default ActivityList;
