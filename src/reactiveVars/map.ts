import { ReactiveVar, makeVar } from '@apollo/client';

export const currentFocusedActivityId: ReactiveVar<string> = makeVar<string>('');
