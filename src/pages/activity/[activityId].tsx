import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import { CTA, Details, Main, Media, Title, Container, TitleAndIcon } from '../../styles/pages/activity.styles';
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
            <TitleAndIcon>
              <Icon category="Kitesurfing" width="24px" height="24px" />
              <h2>Kitesurfing taster day</h2>
            </TitleAndIcon>
            <h4>Hill Head Beach, Southampton . Share . Save</h4>
          </Title>
          <Media>
            <ActivityImage
              src={`/images/demo/kitesurfing.jpeg`}
              alt={'TODO' || undefined}
              objectFit="cover"
              objectPosition="center"
              width={spacing[18]}
              height={spacing[14]}
            />
          </Media>
          <Details>
            <h3>Introductory class run by Fareham Watersports</h3>
            <p>LOGO PLACEHOLDER</p>
            <p>*4.95 . 64 reviews</p>
            <p>Outdoors</p>
            <p>Skill level: Beginner/Intermediate</p>
            <p>Physical intensity: Medium (INFO)</p>
            <p>Women aged 14 and up (INFO - LGBTQ+ friendly = guidelines)</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. READ MORE
            </p>

            <h3>{"Where you'll be"}</h3>
            <p>MAP PLACEHOLDER</p>

            <h3>Activities like this PLACEHOLDER</h3>
          </Details>
          <CTA>
            <p>Book now</p>
            <p>About the host</p>
            <p>Report this listing</p>
          </CTA>
        </Main>
      </Container>
    </>
  );
};

export default ActivityPage;

// export const getServerSideProps = getActivityPageServerProps;
