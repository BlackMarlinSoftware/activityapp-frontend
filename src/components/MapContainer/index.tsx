import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedLocationId } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { Location } from '../../types';
import { updateQueryParams, getMapCoordsQueryParams, getMapViewportQueryParams } from './utils';
import { Container } from './styles';
import { routeLoadingVar } from '../../reactiveVars/loading';
import LoadingFloat from '../uiComponents/LoadingFloat';

interface Props {
  locations: Location[];
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ locations, initialViewState }: Props): JSX.Element => {
  const focusedLocationId = useReactiveVar(currentFocusedLocationId);
  const routeLoading = useReactiveVar(routeLoadingVar);
  const router = useRouter();

  const activitiesLoading = routeLoading?.includes('/activities?');

  return (
    <Container>
      {activitiesLoading && <LoadingFloat />}
      <Map
        initialViewState={initialViewState}
        onLoad={(evt) => {
          const newMapViewportQueryParams = { ...getMapViewportQueryParams(evt) };
          updateQueryParams(router)(newMapViewportQueryParams);
        }}
        onMoveEnd={(evt) => {
          const newMapQueryParams = { ...getMapCoordsQueryParams(evt), ...getMapViewportQueryParams(evt) };
          updateQueryParams(router)(newMapQueryParams);
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
      >
        {locations.map((location) => (
          <Marker
            style={{ zIndex: focusedLocationId === location.id ? 3 : 'unset' }}
            key={location.id}
            latitude={location.lat}
            longitude={location.long}
            anchor="center"
          >
            <ActivityCardMap
              key={location.id}
              activity={location.activities[0]}
              focused={focusedLocationId === location.id}
            />
          </Marker>
        ))}
      </Map>
    </Container>
  );
};

export default MapContainer;
