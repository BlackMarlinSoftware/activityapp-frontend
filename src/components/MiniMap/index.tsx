import Map, { Marker } from 'react-map-gl';
import { ViewState } from 'react-map-gl/dist/esm/types/external';
import { LocationRaw } from '../../types';
import { Container } from './styles';
import { spacing } from '../../styles/theme';

interface Props {
  location: LocationRaw;
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ location, initialViewState }: Props): JSX.Element => (
  <Container>
    <Map
      style={{ borderRadius: spacing[3] }}
      initialViewState={initialViewState}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
    >
      <Marker latitude={location.lat} longitude={location.long} anchor="center" />
    </Map>
  </Container>
);

export default MapContainer;
