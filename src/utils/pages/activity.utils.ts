import { GetServerSideProps } from 'next';
import { Props } from '../../pages/activity/[activityId]';
import { addApolloState, initializeApollo } from '../../apollo-client';
import {
  ActivityDetailsQuery,
  ActivityDetailsQueryVariables,
  Experience_Levels_Enum,
  Intensity_Levels_Enum,
} from '../../generated/graphql';
import { ACTIVITY_DETAILS } from '../../queries/activity.query';
import { ActivityKeyPoint } from '../../types';

export const getActivityPageServerProps: GetServerSideProps = async (context): Promise<{ props: Props }> => {
  const apolloClient = initializeApollo();

  try {
    const {
      data: { activities_by_pk },
    } = await apolloClient.query<ActivityDetailsQuery, ActivityDetailsQueryVariables>({
      query: ACTIVITY_DETAILS,
      fetchPolicy: 'no-cache',
      variables: { activityId: context.params?.activityId as string },
    });

    const props: Props = {
      activity: activities_by_pk || null,
    };

    return addApolloState(apolloClient, {
      props,
    });
  } catch (err) {
    console.error(err);

    const props: Props = {
      activity: null,
      error: 'Could not fetch activity details',
    };

    return addApolloState(apolloClient, {
      props,
    });
  }
};

export const intensityLevelsMap: Record<Intensity_Levels_Enum, ActivityKeyPoint> = {
  LOW: {
    name: 'Low physical intensity',
    description: 'Suitable for any level of fitness',
    icon: 'LightningColourOutline',
  },
  MEDIUM: {
    name: 'Medium physical intensity',
    description: 'Suitable for people with an average level of fitness',
    icon: 'LightningColour',
  },
  HIGH: {
    name: 'High physical intensity',
    description: 'Suitable for people with a higher level of fitness',
    icon: 'ThermometerColour',
  },
  ANY: {
    name: 'Go at your own pace',
    description: 'Suitable for any level of fitness',
    icon: 'LightningColour',
  },
};

export const experienceLevelsMap: Record<Experience_Levels_Enum, ActivityKeyPoint> = {
  BEGINNER: {
    name: 'Beginner',
    description: 'Suitable for people starting out',
    icon: 'IncreasingBars1',
  },
  BEGINNER_TO_INTERMEDIATE: {
    name: 'Beginner to intermediate',
    description: 'Suitable for people starting out or improving',
    icon: 'IncreasingBars2',
  },
  INTERMEDIATE: {
    name: 'Intermediate',
    description: 'Suitable for people improving their skills',
    icon: 'IncreasingBars2',
  },
  INTERMEDIATE_TO_ADVANCED: {
    name: 'Intermediate to advanced',
    description: 'Suitable for experienced people improving their skills',
    icon: 'IncreasingBars3',
  },
  ADVANCED: {
    name: 'Advanced',
    description: 'Suitable for people who are already experienced',
    icon: 'IncreasingBars3',
  },
  ANY: {
    name: 'Any experience level',
    description: 'Suitable for anyone from beginner to advanced',
    icon: 'IncreasingBars3',
  },
};

export const getAgeRangeInfo = (ageMin?: number | null, ageMax?: number | null): ActivityKeyPoint => {
  let name = '';
  let description = '';
  let icon = 'PersonColour';

  const baby = 0;
  const child = 4;
  const teenager = 13;
  const adult = 18;
  const senior = 50;

  if (ageMin && ageMax) {
    name = `Ages ${ageMin} to ${ageMax}`;

    if (ageMin >= baby && ageMax <= child) description = 'Suitable for very young children';
    else if (ageMin >= baby && ageMax <= teenager) description = 'Suitable for younger children';
    else if (ageMin >= baby && ageMax <= adult) description = 'Suitable for children and teenagers';
    else if (ageMax <= teenager) description = 'Suitable for children';
    else if (ageMin >= teenager && ageMax <= adult) description = 'Suitable for teenagers';
    else if (ageMin >= adult) description = 'Suitable for adults';
    else if (ageMin >= senior) description = 'Suitable for senior citizens';
    else description = 'Suitable for a range of ages';
  }

  if (ageMin && !ageMax) {
    name = `Ages ${ageMin} and up`;

    if (ageMin >= senior) description = 'Suitable for senior citizens';
    else if (ageMin >= adult) description = 'Suitable for all adults';
    else if (ageMin >= teenager) description = 'Not suitable for children';
    else if (ageMin >= child) description = 'Not suitable for very young children';
    else description = 'Suitable for all ages';
  }

  if (!ageMin && ageMax) {
    name = `Ages ${ageMax} and under`;

    if (ageMax <= child) description = 'Suitable for very young children';
    else if (ageMax <= teenager) description = 'Suitable for children';
    else if (ageMax <= adult) description = 'Suitable for children and teenagers';
    else if (ageMax <= senior) description = 'Suitable for adults';
    else description = 'Suitable for all ages';
  }

  if (!ageMin && !ageMax) {
    name = 'All ages';
    description = 'Suitable for all ages';
  }

  if (ageMax && ageMax <= teenager) {
    icon = 'ChildColour';
  }

  return { name, description, icon };
};
