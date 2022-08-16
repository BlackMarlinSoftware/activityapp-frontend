import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import MiniMap from '../../components/MiniMap';
import ReadMore from '../../components/uiComponents/ReadMore';
import useWindowSize from '../../hooks/useWindowSize';
import { deviceWidth } from '../../styles/devices';
import { LinkText } from '../../styles/GlobalStyles';
import {
  CTATablet,
  CTAMobile,
  Details,
  Main,
  Media,
  Title,
  Container,
  TitleIcon,
  DetailsSection,
  HostLogoImage,
  SummaryContainer,
  HostLogoContainer,
  KeyInfoItem,
  InfoAndCaption,
  KeyInformation,
  BookNowContainer,
  CTAButton,
  IconAndText,
  LocationAndActions,
  Address,
  GettingThereSection,
  HostHeadline,
  HostCertifications,
  StickyCTA,
  DetailsAndCTA,
} from '../../styles/pages/activity.styles';
import { colors, spacing } from '../../styles/theme';
import { Activity } from '../../types';
import { getActivityPageServerProps } from '../../utils/pages/activity.utils';

export interface Props {
  activity: Activity;
  error?: string;
}

const ActivityPage: NextPage<Props> = ({ activity, error }) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const { windowWidth } = useWindowSize();

  if (!activity) {
    return (
      <div>
        <h2>An error occurred.</h2>
        <h3>{error}</h3>
      </div>
    );
  }

  const firstImage = activity.activities_x_media[0].media;
  const hostActivityCount = activity.host.activities_aggregate.aggregate?.count;

  const share = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator.share({ url: currentUrl, text: `${activity.name}, ${activity.location.name}` });
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopiedToClipboard(true);
      });
    }
  };

  return (
    <>
      <Header widthConstrained={true} />
      <Container>
        <Main>
          <Title>
            <h2>
              <TitleIcon>
                <Icon icon={activity.activities_x_categories[0].category.name} width="24px" height="24px" />
              </TitleIcon>
              <span>{activity.name}</span>
            </h2>

            <LocationAndActions>
              <h4>{activity.location.name}</h4>
              {copiedToClipboard ? (
                <h4>Link copied to clipboard!</h4>
              ) : (
                <LinkText onClick={share}>
                  <IconAndText>
                    <Icon icon="Share" />
                    <h4>Share</h4>
                  </IconAndText>
                </LinkText>
              )}
            </LocationAndActions>
          </Title>

          <Media>
            <ActivityImage
              src={`/images/${activity.id}/${firstImage.path}`}
              alt={firstImage.caption || undefined}
              objectFit="cover"
              objectPosition="center"
              width={spacing[18]}
              height={spacing[windowWidth && windowWidth < deviceWidth.mobileXL ? 15 : 14]}
              priority
            />
          </Media>

          <DetailsAndCTA>
            <Details>
              <DetailsSection>
                <SummaryContainer>
                  <h3>Class run by {activity.host.name}</h3>
                  <IconAndText>
                    <Icon icon="Star" colour={colors.primary[6]} />
                    <h4>New</h4>
                  </IconAndText>
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
                  {activity.location.outdoors ? (
                    <KeyInfoItem>
                      <Icon icon="TreeColour" width={spacing[6]} height={spacing[6]} />
                      <InfoAndCaption>
                        <h5>Outdoors</h5>
                        <h6>This activity is mostly or entirely outdoors</h6>
                      </InfoAndCaption>
                    </KeyInfoItem>
                  ) : (
                    <KeyInfoItem>
                      <Icon icon="HomeColour" width={spacing[6]} height={spacing[6]} />
                      <InfoAndCaption>
                        <h5>Indoors</h5>
                        <h6>This activity is mostly or entirely indoors</h6>
                      </InfoAndCaption>
                    </KeyInfoItem>
                  )}
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
                  {/* 
                <KeyInfoItem>
                  <Icon icon="ThermometerColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>High physical intensity</h5>
                    <h6>Suitable for people with a good level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="LightningColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Choice of physical intensity</h5>
                    <h6>Suitable for any level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="LightningColourOutline" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Low physical intensity</h5>
                    <h6>Suitable for any level of fitness</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="ChildColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 7</h5>
                    <h6>Suitable for children</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="ChildColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 15</h5>
                    <h6>Suitable for children and teenagers</h6>
                  </InfoAndCaption>
                </KeyInfoItem>
                <KeyInfoItem>
                  <Icon icon="PersonColour" width={spacing[6]} height={spacing[6]} />
                  <InfoAndCaption>
                    <h5>Ages 5 to 25</h5>
                    <h6>Suitable for a range of ages</h6>
                  </InfoAndCaption>
                </KeyInfoItem>*/}
                </KeyInformation>
              </DetailsSection>

              <DetailsSection>
                <h3>About this activity</h3>
                <ReadMore lines={4} text={activity.description} />
              </DetailsSection>

              <DetailsSection>
                <h3>Getting to {activity.location.name}</h3>

                {activity.location.address && (
                  <GettingThereSection>
                    <h4>Address</h4>
                    <Address>{activity.location.address}</Address>
                  </GettingThereSection>
                )}

                {activity.location.directions && (
                  <GettingThereSection>
                    <h4>Directions</h4>
                    <ReadMore lines={4} text={activity.location.directions} />
                  </GettingThereSection>
                )}

                <MiniMap
                  location={activity.location}
                  initialViewState={{ longitude: activity.location.long, latitude: activity.location.lat, zoom: 11 }}
                />
              </DetailsSection>

              <DetailsSection>
                <h3>About the host</h3>

                <HostHeadline>
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

                  <div>
                    <h4>{activity.host.name}</h4>
                    {hostActivityCount && (
                      <h6>
                        {hostActivityCount} {hostActivityCount === 1 ? 'activity' : 'activities'}
                      </h6>
                    )}
                  </div>
                </HostHeadline>

                {/* <HostCertifications>
                  <KeyInfoItem>
                    <Icon icon="MedalColour" width={spacing[5]} height={spacing[5]} />
                    <InfoAndCaption>
                      <h5>Water Sports Association Accredited</h5>
                    </InfoAndCaption>
                  </KeyInfoItem>
                  <KeyInfoItem>
                    <Icon icon="MedalColour" width={spacing[5]} height={spacing[5]} />
                    <InfoAndCaption>
                      <h5>RYIA Certified</h5>
                    </InfoAndCaption>
                  </KeyInfoItem>
                </HostCertifications> */}

                <ReadMore
                  lines={4}
                  text={`Fareham Watersports was founded in 1999 on the principle that anyone should be able to have fun on the
                water. Some more information here and etc.`}
                />
              </DetailsSection>

              <h3>Activities like this</h3>
              <p>OTHER ACTIVITIES PLACEHOLDER</p>
            </Details>

            <CTATablet>
              <StickyCTA>
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
              </StickyCTA>
            </CTATablet>
          </DetailsAndCTA>
        </Main>

        <CTAMobile>
          <div>
            <h4>Join this class</h4>
          </div>
          <CTAButton>Book now</CTAButton>
        </CTAMobile>
      </Container>
    </>
  );
};

export default ActivityPage;

export const getServerSideProps = getActivityPageServerProps;