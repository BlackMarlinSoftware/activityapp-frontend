import { NextRouter } from 'next/router';
import { MapboxEvent, ViewStateChangeEvent } from 'react-map-gl';
import { MapCoords, MapViewportState } from '../../reactiveVars/map';

export const updateQueryParams = (router: NextRouter) => (params: Record<string, string | number>) => {
  router.replace({ query: { ...router.query, ...params } });
};

export const getMapCoordsQueryParams = (evt: ViewStateChangeEvent) => {
  const { longitude, latitude, zoom } = evt.viewState;

  const newMapCoords: MapCoords = {
    longitude,
    latitude,
    zoom,
  };

  return newMapCoords;
};

export const getMapViewportQueryParams = (evt: MapboxEvent | ViewStateChangeEvent) => {
  const viewportSWCorner = evt.target.getBounds().getSouthWest();
  const viewportNECorner = evt.target.getBounds().getNorthEast();

  const newMapViewportState: MapViewportState = {
    viewportLatitudeMin: viewportSWCorner.lat,
    viewportLatitudeMax: viewportNECorner.lat,
    viewportLongitudeMin: viewportSWCorner.lng,
    viewportLongitudeMax: viewportNECorner.lng,
  };

  return newMapViewportState;
};
