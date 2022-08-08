import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import { LocationRaw } from '../../types';
import { Container } from './styles';

interface Props {
  location: LocationRaw;
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ location, initialViewState }: Props): JSX.Element => (
  <Container>
    <Map
      initialViewState={initialViewState}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
    >
      <Marker latitude={location.lat} longitude={location.long} anchor="center" />
    </Map>
  </Container>
);

export default MapContainer;
