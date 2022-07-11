import {NextPage} from 'next';
import {useRouter} from 'next/router';
import Header from '../../components/Header';
import MapContainer from '../../components/MapContainer';
import {dataSelection, initialViewStateSelection, LOCATIONS} from '../../types';
import ActivityCard from '../../components/ActivityCard';
import styled from 'styled-components';
import {spacing} from '../../styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: calc(100vh - ${spacing['8']});
`;

const List = styled.div`
  width: 50%;
  background-color: white;
  max-height: 100%;
  overflow: auto;
`;

const ActivityContainer = styled.div`
  background-color: white;
  width: 100%;
  max-height: 100%;
`;

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
