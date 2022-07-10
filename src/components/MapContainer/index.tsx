import { Container } from './styles';
import Map, { Marker } from 'react-map-gl';
import { ActivitiesQuery } from '../../generated/graphql';
import ActivityCardMap from '../ActivityCardMap';

interface Props {
  activities: ActivitiesQuery['activities'];
}

const MapContainer = ({ activities }: Props): JSX.Element => (
  <Container>
    <Map
      initialViewState={{
        latitude: 51.4542506,
        longitude: -0.1166653,
        zoom: 14,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
    >
      {activities.map((activity) => (
        <>
          {activity?.location?.lat && activity?.location?.long && (
            <Marker key={activity.id} latitude={activity.location.lat} longitude={activity.location.long} anchor="top">
              <ActivityCardMap activity={activity} />
            </Marker>
          )}
        </>
      ))}
    </Map>
  </Container>
);

export default MapContainer;
