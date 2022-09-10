import { NextPage } from 'next';
import Header from '../components/Header';
import MapContainer from '../components/MapContainer';
import ActivityList from '../components/ActivityList';
import { MapCoords, MapViewportState } from '../reactiveVars/map';
import { ActivityListing, Location } from '../types';
import { getActivitiesPageServerProps } from '../utils/pages/activities.utils';
import {
  MainContentContainer,
  PageContainer,
  ListMapSwitcherButton,
  ListResponsiveWrapper,
  MapResponsiveWrapper,
} from '../styles/pages/activities.styles';
import React from 'react';
import Icon from '../components/Icon';

export interface Props {
  mapCoords: MapCoords;
  locations: Location[];
  activities: ActivityListing[];
  mapViewportState: MapViewportState;
  error?: string;
}

const ActivitiesPage: NextPage<Props> = ({ mapCoords, locations, activities, mapViewportState }) => {
  const [isMapViewToggled, setIsMapViewToggled] = React.useState(true);

  return (
    <PageContainer>
      <Header widthConstrained={false} />
      <MainContentContainer>
        <ListResponsiveWrapper mapView={isMapViewToggled}>
          <ActivityList activities={activities} mapViewportState={mapViewportState} />
        </ListResponsiveWrapper>
        <MapResponsiveWrapper mapView={isMapViewToggled}>
          <MapContainer locations={locations} initialViewState={mapCoords} />
        </MapResponsiveWrapper>
        <ListMapSwitcherButton
          onClick={() => {
            setIsMapViewToggled((prev) => !prev);
          }}
        >
          <div>
            <span>{isMapViewToggled ? 'Show List' : 'Show Map'}</span>
            <span>{isMapViewToggled ? <Icon icon="List" /> : <Icon icon="UIMap" />}</span>
          </div>
        </ListMapSwitcherButton>
      </MainContentContainer>
    </PageContainer>
  );
};

export default ActivitiesPage;

export const getServerSideProps = getActivitiesPageServerProps;
