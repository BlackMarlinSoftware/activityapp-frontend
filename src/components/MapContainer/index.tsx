import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedLocationId } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { Location } from '../../types';
import { updateQueryParams, getMapCoordsQueryParams, getMapViewportQueryParams } from './utils';
import { StickyContainer } from './styles';
import LoadingFloat from '../uiComponents/LoadingFloat';
import useRouteChange from '../../hooks/useRouteChange';

interface Props {
  locations: Location[];
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ locations, initialViewState }: Props): JSX.Element => {
  const focusedLocationId = useReactiveVar(currentFocusedLocationId);
  const routeLoading = useRouteChange();
  const router = useRouter();

  const activitiesLoading = routeLoading?.includes('/activities?');

  return (
    <StickyContainer>
      {activitiesLoading && <LoadingFloat />}
      <Map
        initialViewState={initialViewState}
        onLoad={(evt) => {
          const newMapViewportQueryParams = { ...getMapViewportQueryParams(evt) };
          updateQueryParams(router)(newMapViewportQueryParams);
        }}
        onMoveEnd={(evt) => {
          if (evt.originalEvent?.type !== 'resize') {
            const newMapQueryParams = { ...getMapCoordsQueryParams(evt), ...getMapViewportQueryParams(evt) };
            updateQueryParams(router)(newMapQueryParams);
          }
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
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
              locationId={location.id}
              activities={location.activities}
              focused={focusedLocationId === location.id}
            />
          </Marker>
        ))}
      </Map>
    </StickyContainer>
  );
};

export default MapContainer;
