import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { currentFocusedActivityId, currentMapState } from '../../reactiveVars/map';
import { useReactiveVar } from '@apollo/client';
import { Activities, Activity } from '../../types';

interface Props {
  activities: Activities;
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ activities, initialViewState }: Props): JSX.Element => {
  const focusedActivityId = useReactiveVar(currentFocusedActivityId);

  return (
    <>
      {initialViewState && (
        <Map
          initialViewState={initialViewState}
          onMove={(evt) => {
            currentMapState({
              longitude: evt.viewState.longitude,
              latitude: evt.viewState.latitude,
              zoom: evt.viewState.zoom,
            });
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
        >
          {activities.map((activity: Activity) => (
            <Marker
              style={{ zIndex: focusedActivityId === activity.id ? 3 : 'unset' }}
              key={activity.id}
              latitude={activity.location.lat}
              longitude={activity.location.long}
              anchor="center"
            >
              <ActivityCardMap key={activity.id} activity={activity} focused={focusedActivityId === activity.id} />
            </Marker>
          ))}
        </Map>
      )}
    </>
  );
};

export default MapContainer;
