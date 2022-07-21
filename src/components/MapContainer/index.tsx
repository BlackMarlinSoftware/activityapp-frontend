import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedLocationId } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { Location } from '../../types';
import { updateMapQueryParams } from './utils';
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

  return (
    <Container>
      {routeLoading?.includes('/activities?') && <LoadingFloat />}
      <Map
        initialViewState={initialViewState}
        onLoad={() => {
          // TODO - split updateMapQueryParams just for the viewport bit
        }}
        onMoveEnd={updateMapQueryParams(router)}
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
