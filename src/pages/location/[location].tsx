import {NextPage} from 'next';
import {useRouter} from 'next/router';
import Header from '../../components/Header';
import MapContainer from '../../components/MapContainer';
import {Container, List, ActivityContainer} from './styles';
import {dataSelection, initialViewStateSelection, LOCATIONS} from '../../types';
import ActivityCard from '../../components/ActivityCard';

const ListingPage: NextPage = () => {
  const router = useRouter();
  const { location } = router.query;

  return <>
    <Header />
    <Container>
      <List>
        {Object.values(LOCATIONS).includes(location as LOCATIONS) ? <ActivityContainer>
          {dataSelection[location as string].activities?.map((activity) => (
            <ActivityCard activity={activity} key={activity.id} />
          ))}
        </ActivityContainer> : <p>The location {location} is not supported yet.</p>}
      </List>
      <MapContainer data={dataSelection[location as string]} initialViewState={initialViewStateSelection[location as string]} />
    </Container>
  </>;
};

export default ListingPage;