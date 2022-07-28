import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import ReadMore from '../../components/uiComponents/ReadMore';
import {
  CTA,
  Details,
  Main,
  Media,
  Title,
  Container,
  TitleAndIcon,
  DetailsSection,
  HostLogoImage,
  SummaryContainer,
  HostLogoContainer,
} from '../../styles/pages/activity.styles';
import { spacing } from '../../styles/theme';

export interface Props {}

const ActivityPage: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { activityId } = router.query;

  return (
    <>
      <Header widthConstrained={true} />
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
            <DetailsSection>
              <SummaryContainer>
                <h3>Class run by Fareham Watersports</h3>
                <p>*4.95 . 64 reviews</p>
                <HostLogoContainer>
                  <HostLogoImage
                    src={`/images/demo/kitesurfing.jpeg`}
                    alt={'TODO' || undefined}
                    objectFit="cover"
                    objectPosition="center"
                    width={spacing[8]}
                    height={spacing[8]}
                  />
                </HostLogoContainer>
              </SummaryContainer>
            </DetailsSection>

            <DetailsSection>
              <p>Outdoors</p>
              <p>Skill level: Beginner/Intermediate</p>
              <p>Physical intensity: Medium (INFO)</p>
              <p>Women aged 14 and up (INFO - LGBTQ+ friendly = guidelines)</p>
            </DetailsSection>

            <DetailsSection>
              <ReadMore
                lines={4}
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.`}
              />
            </DetailsSection>

            <DetailsSection>
              <h3>Getting there</h3>
              <p>MAP PLACEHOLDER</p>
            </DetailsSection>

            <DetailsSection>
              <h3>About the host</h3>
              <p>HOST DETAILS PLACEHOLDER</p>
            </DetailsSection>

            <h3>Activities like this</h3>
            <p>OTHER ACTIVITIES PLACEHOLDER</p>
          </Details>
          <CTA>
            <p>Book now</p>
            <p>Report this listing</p>
          </CTA>
        </Main>
      </Container>
    </>
  );
};

export default ActivityPage;

// export const getServerSideProps = getActivityPageServerProps;
