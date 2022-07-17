import { ReactiveVar, makeVar } from '@apollo/client';

export interface MapCoords {
  longitude: number;
  latitude: number;
  zoom: number;
}
export const currentFocusedActivityId: ReactiveVar<string> = makeVar<string>('');
export const currentMapState: ReactiveVar<MapCoords> = makeVar<MapCoords>({
  longitude: 0,
  latitude: 0,
  zoom: 0,
});
