import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedLocationId, MapCoords, MapViewportState } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { useRouter } from 'next/router';
import { Location } from '../../types';

interface Props {
  locations: Location[];
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ locations, initialViewState }: Props): JSX.Element => {
  const focusedLocationId = useReactiveVar(currentFocusedLocationId);
  const router = useRouter();

  const updateUrlQuery = (newQueryParams: Record<string, string | number>) => {
    router.replace({ query: { ...router.query, ...newQueryParams } });
  };

  return (
    <>
      {initialViewState && (
        <Map
          initialViewState={initialViewState}
          onMoveEnd={(evt) => {
            const { longitude, latitude, zoom } = evt.viewState;

            const newMapCoords: MapCoords = {
              longitude,
              latitude,
              zoom,
            };

            const viewportSWCorner = evt.target.getBounds().getSouthWest();
            const viewportNECorner = evt.target.getBounds().getNorthEast();

            const newMapViewportState: MapViewportState = {
              viewportLatitudeMin: viewportSWCorner.lat,
              viewportLatitudeMax: viewportNECorner.lat,
              viewportLongitudeMin: viewportSWCorner.lng,
              viewportLongitudeMax: viewportNECorner.lng,
            };

            updateUrlQuery({ ...newMapCoords, ...newMapViewportState });
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
