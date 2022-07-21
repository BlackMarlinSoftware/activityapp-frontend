import { makeVar } from '@apollo/client';

export const routeLoadingVar = makeVar<string | undefined>(undefined);
