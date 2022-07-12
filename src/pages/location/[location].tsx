import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import client from '../../apollo-client';
import { ACTIVITIES } from '../../queries/activities.query';
import MapContainer from '../../components/MapContainer';
import { initialViewStateSelection } from '../../types';
import styled from 'styled-components';
import { spacing } from '../../styles/theme';
import { ActivitiesQuery } from '../../generated/graphql';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - ${spacing['8']});
`;

interface Props {
  activities: ActivitiesQuery['activities'];
}

const ListingPage: NextPage<Props> = ({ activities }) => {
  const router = useRouter();
  const { location } = router.query;

  return (
    <>
      <Header />
      <Container>
        <MapContainer activities={activities} initialViewState={initialViewStateSelection[location as string]} />
      </Container>
    </>
  );
};

export default ListingPage;

export async function getServerSideProps(): Promise<{ props: Props }> {
  const { data } = await client.query<ActivitiesQuery>({
    query: ACTIVITIES,
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      activities: data.activities,
    },
  };
}
