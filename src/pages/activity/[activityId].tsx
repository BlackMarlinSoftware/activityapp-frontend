import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import { CTA, Details, Main, Media, Title, Container } from '../../styles/pages/activity.styles';
import { spacing } from '../../styles/theme';

export interface Props {}

const ActivityPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { activityId } = router.query;

  return (
    <>
      <Header />
      <Container>
        <Main>
          <Title>
            <h2>Kitesurfing taster day</h2>
            <h4>Hill Head Beach, Southampton</h4>
          </Title>
          <Media>
            <ActivityImage
              src={`/images/faab61f9-9ec6-4f59-a7b9-e31c6a41b81d/wushu_sanda.jpeg`}
              alt={'TODO' || undefined}
              objectFit="cover"
              objectPosition="center"
              width={spacing[18]}
              height={spacing[14]}
            />
          </Media>
          <Details>
            <h3>Details</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <h3>More</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </Details>
          <CTA>CTA</CTA>
        </Main>
      </Container>
    </>
  );
};

export default ActivityPage;

// export const getServerSideProps = getActivityPageServerProps;
