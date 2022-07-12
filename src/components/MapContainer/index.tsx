import { Container } from './styles';
import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import ActivityCardMap from '../ActivityCardMap';
import { ActivitiesQuery } from '../../generated/graphql';

interface Props {
  activities: ActivitiesQuery['activities'];
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ activities, initialViewState }: Props): JSX.Element => {
  return (
    <Container>
      {initialViewState && (
        <Map
          initialViewState={initialViewState}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
        >
          {activities.map((activity) => (
            <Marker
              key={activity.id}
              latitude={activity.location.lat}
              longitude={activity.location.long}
              anchor="center"
            >
              <ActivityCardMap key={activity.id} activity={activity} />
            </Marker>
          ))}
        </Map>
      )}
    </Container>
  );
};

export default MapContainer;
