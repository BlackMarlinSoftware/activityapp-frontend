import { makeVar } from '@apollo/client';

export interface MapCoords {
  longitude: number;
  latitude: number;
  zoom: number;
}

export interface MapViewportState {
  viewportLatitudeMin: number;
  viewportLatitudeMax: number;
  viewportLongitudeMin: number;
  viewportLongitudeMax: number;
}

export const currentFocusedLocationId = makeVar<string>('');
