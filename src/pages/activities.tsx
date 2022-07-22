import { NextPage } from 'next';
import Header from '../components/Header';
import MapContainer from '../components/MapContainer';
import ActivityList from '../components/ActivityList';
import { MapCoords, MapViewportState } from '../reactiveVars/map';
import { Activity, Location } from '../types';
import { getActivitiesPageServerProps } from '../utils/pages/activities.utils';
import { Container, PageContainer } from '../styles/pages/activities.styles';

export interface Props {
  mapCoords: MapCoords;
  locations: Location[];
  activities: Activity[];
  mapViewportState: MapViewportState;
}

const ActivitiesPage: NextPage<Props> = ({ mapCoords, locations, activities, mapViewportState }) => (
  <PageContainer>
    <Header />
    <Container>
      <ActivityList activities={activities} mapViewportState={mapViewportState} />
      <MapContainer locations={locations} initialViewState={mapCoords} />
    </Container>
  </PageContainer>
);

export default ActivitiesPage;

export const getServerSideProps = getActivitiesPageServerProps;
