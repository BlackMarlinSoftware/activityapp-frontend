import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { Main } from '../../styles/pages/activity.styles';

export interface Props {}

const ActivityPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { activityId } = router.query;

  return (
    <>
      <Header />
      <Main>
        <p>Activity: {activityId}</p>
      </Main>
    </>
  );
};

export default ActivityPage;

// export const getServerSideProps = getActivityPageServerProps;
