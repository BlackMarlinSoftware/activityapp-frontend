import { Container } from './styles';
import Map, { Marker, Popup } from 'react-map-gl';
import { Data } from '../../types';
import ActivityCardMap from '../activityCardMap';
import {ViewState} from 'react-map-gl/dist/esm/types/external';

interface mapContainerProps {
  data: Data;
  initialViewState: Partial<ViewState>;
}

const MapContainer = ({ data, initialViewState }: mapContainerProps): JSX.Element => {
  return (
    <Container>
      {data && initialViewState && <Map
        initialViewState={{...initialViewState, zoom: 14}}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
      >
        {data?.activities?.map((activity) => (
          <>
            {activity?.location?.lat && activity?.location?.long && (
              <Marker
                key={activity.id}
                latitude={activity.location.lat}
                longitude={activity.location.long}
                anchor="top"
              >
                <ActivityCardMap activity={activity} />
              </Marker>
            )}
          </>
        ))}
      </Map>}
    </Container>
  );
};

export default MapContainer;
