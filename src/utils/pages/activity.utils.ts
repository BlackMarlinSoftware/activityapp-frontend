import { GetServerSideProps } from 'next';
import { Props } from '../../pages/activity/[activityId]';
import { addApolloState, initializeApollo } from '../../apollo-client';
import { ActivityDetailsQuery, ActivityDetailsQueryVariables } from '../../generated/graphql';
import { ACTIVITY_DETAILS } from '../../queries/activity.query';

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
    const props: Props = {
      activity: null,
      error: 'Could not fetch activity details',
    };

    return addApolloState(apolloClient, {
      props,
    });
  }
};
