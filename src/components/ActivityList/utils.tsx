import ActivityCardLoading from '../ActivityCardLoading';

export const loadingShimmerActivities = (count: number) =>
  Array.from({ length: count === 0 ? 10 : count }, (_, index) => {
    return <ActivityCardLoading key={index} />;
  });
