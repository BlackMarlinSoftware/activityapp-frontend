import { NextRouter } from 'next/router';
import { ViewStateChangeEvent } from 'react-map-gl';
import { MapCoords, MapViewportState } from '../../reactiveVars/map';

export const updateMapQueryParams = (router: NextRouter) => (evt: ViewStateChangeEvent) => {
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

  router.replace({ query: { ...router.query, ...newMapCoords, ...newMapViewportState } });
};
