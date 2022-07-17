import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedLocationId, currentMapState, MapCoords } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { LocationsActivitiesInRadiusQuery } from '../../generated/graphql';

interface Props {
  locations: LocationsActivitiesInRadiusQuery['locations_in_radius'];
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ locations, initialViewState }: Props): JSX.Element => {
  const focusedLocationId = useReactiveVar(currentFocusedLocationId);
  const router = useRouter();

  const updateMapQuery = ({ latitude, longitude, zoom }: MapCoords) => {
    router.replace({ query: { ...router.query, latitude, longitude, zoom } });
  };

  return (
    <>
      {initialViewState && (
        <Map
          initialViewState={initialViewState}
          onMoveEnd={(evt) => {
            const newCoords: MapCoords = {
              longitude: evt.viewState.longitude,
              latitude: evt.viewState.latitude,
              zoom: evt.viewState.zoom,
            };
            currentMapState(newCoords);
            updateMapQuery(newCoords);
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
      )}
    </>
  );
};

export default MapContainer;
