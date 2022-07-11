import { Data } from '../../types';
import ActivityCard from '../ActivityCard';
import { ActivityRows, ListArea } from './styles';

interface Props {
  data: Data;
}

const ActivityList = ({ data }: Props): JSX.Element => (
  <ListArea>
    <h4>{data.activities?.length} cycling activities in Brixton, London</h4>

    <ActivityRows>
      {data.activities?.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </ActivityRows>
  </ListArea>
);

export default ActivityList;
