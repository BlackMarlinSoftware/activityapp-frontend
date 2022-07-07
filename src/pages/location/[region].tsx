import {NextPage} from 'next';
import {useRouter} from 'next/router';
import Header from '../../components/header';
import MapContainer from '../../components/mapContainer';
import {brixtonData} from '../../brixtonData';
import {Container, List} from './styles';
import ActivityCard from '../../components/activityCard';
import {ActivityContainer} from '../index';

const ListingPage: NextPage = () => {
  const router = useRouter();
  const { region } = router.query;

  console.log(region);

  return <>
    <Header />
    <Container>
      <List>
        <ActivityContainer>
          <h1>Activities</h1>
          {brixtonData.activities?.map((activity) => (
            <ActivityCard activity={activity} key={activity.id} />
          ))}
        </ActivityContainer>
      </List>
      <MapContainer data={brixtonData} />
    </Container>
  </>;
};

export default ListingPage;
