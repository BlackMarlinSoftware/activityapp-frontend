import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import ReadMore from '../../components/uiComponents/ReadMore';
import { LinkText } from '../../styles/GlobalStyles';
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
  KeyInfoItem,
  InfoAndCaption,
  KeyInformation,
  BookNowContainer,
  CTAButton,
  ReviewsSummary,
} from '../../styles/pages/activity.styles';
import { colors, spacing } from '../../styles/theme';

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
              <Icon icon="Kitesurfing" width="24px" height="24px" />
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
                <ReviewsSummary>
                  <Icon icon="Star" colour={colors.primary[6]} />
                  <p>New</p>
                </ReviewsSummary>
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
              <KeyInformation>
                <KeyInfoItem>
                  <Icon icon="TreeColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Outdoors</h5>
                    <h6>This activity is mostly or entirely outdoors</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="IncreasingBarsColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Beginner to intermediate</h5>
                    <h6>Suitable for people starting out or improving</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="LightningColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Medium physical intensity</h5>
                    <h6>Suitable for people with an average level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="PersonColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 14 and up</h5>
                    <h6>Unsuitable for young children</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="MedalColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Highly qualified host</h5>
                    <h6>This host is a verified expert</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                {/* <KeyInfoItem>
                  <Icon icon="HomeColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Indoors</h5>
                    <h6>This activity is mostly or entirely indoors</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="ThermometerColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>High physical intensity</h5>
                    <h6>Suitable for people with a good level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="LightningColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Choice of physical intensity</h5>
                    <h6>Suitable for any level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="LightningColourOutline" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Low physical intensity</h5>
                    <h6>Suitable for any level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="ChildColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 7</h5>
                    <h6>Suitable for children</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="ChildColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 15</h5>
                    <h6>Suitable for children and teenagers</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
                {/* <KeyInfoItem>
                  <Icon icon="PersonColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 25</h5>
                    <h6>Suitable for a range of ages</h6>
                  </InfoAndCaption>
                </KeyInfoItem> */}
              </KeyInformation>
            </DetailsSection>

            <DetailsSection>
              <h3>About this activity</h3>
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
              <ReadMore
                lines={4}
                text={`Head towards the beach via the usual entrance, then turn left when you see the large sand dune. Meet by
                the arches.`}
              />
              <p>MAP PLACEHOLDER</p>
            </DetailsSection>

            <DetailsSection>
              <h3>About the host</h3>
              <ReadMore
                lines={4}
                text={`Fareham Watersports was founded in 1999 on the principle that anyone should be able to have fun on the
                water. Some more information here and etc.`}
              />
            </DetailsSection>

            <h3>Activities like this</h3>
            <p>OTHER ACTIVITIES PLACEHOLDER</p>
          </Details>
          <CTA>
            <BookNowContainer>
              <h3>Join this class</h3>
              <h6>
                {`'Book now' will take you to the host website where you can find times, booking information and more.`}
              </h6>
              <CTAButton>Book now</CTAButton>
            </BookNowContainer>
            <Link passHref href="/report">
              <LinkText>
                <h6>Report this listing</h6>
              </LinkText>
            </Link>
          </CTA>
        </Main>
      </Container>
    </>
  );
};

export default ActivityPage;

// export const getServerSideProps = getActivityPageServerProps;
