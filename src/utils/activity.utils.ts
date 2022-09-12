import { Activity_Types_Enum } from '../generated/graphql';

export const activityTypeLabelMap: Record<Activity_Types_Enum, string> = {
  CLASS: 'class',
  PRIVATE_CLASS: 'private class',
  OTHER: 'activity',
};

export const capitalFirstLetter = (input: string) => input.charAt(0).toUpperCase() + input.slice(1);