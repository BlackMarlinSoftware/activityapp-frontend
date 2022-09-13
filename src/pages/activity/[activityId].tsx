import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ActivityImage } from '../../components/ActivityCard/styles';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import MiniMap from '../../components/MiniMap';
import ReadMore from '../../components/uiComponents/ReadMore';
import useBackUrl from '../../hooks/useBackUrl';
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
  StickyCTA,
  DetailsAndCTA,
} from '../../styles/pages/activity.styles';
import { colors, spacing } from '../../styles/theme';
import { Activity } from '../../types';
import { activityTypeLabelMap, capitalFirstLetter } from '../../utils/activity.utils';
import {
  experienceLevelsMap,
  getActivityPageServerProps,
  getAgeRangeInfo,
  intensityLevelsMap,
} from '../../utils/pages/activity.utils';

export interface Props {
  activity: Activity;
  error?: string;
}

const ActivityPage: NextPage<Props> = ({ activity, error }) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const { windowWidth } = useWindowSize();
  const backUrl = useBackUrl();

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
  const experienceLevel = activity.experience_level ? experienceLevelsMap[activity.experience_level] : undefined;
  const intensityLevel = activity.intensity_level ? intensityLevelsMap[activity.intensity_level] : undefined;
  const ageRange = getAgeRangeInfo(activity.age_min, activity.age_max);
  const activityTypeLabel = activityTypeLabelMap[activity.type];
  const mediaHeight = windowWidth && windowWidth < deviceWidth.mobileXL ? spacing[15] : spacing[14];
  const titleIconSize = windowWidth && windowWidth < deviceWidth.mobileXL ? '20px' : spacing[5];

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
        {backUrl && (
          <Link href={backUrl} passHref>
            Back
          </Link>
        )}

        <Main>
          <Title>
            <h2>
              <TitleIcon>
                <Icon
                  icon={activity.activities_x_categories[0].category.name}
                  width={titleIconSize}
                  height={titleIconSize}
                />
              </TitleIcon>
              <span>{activity.name}</span>
            </h2>

            <LocationAndActions>
              <IconAndText>
                <Icon icon="Pin" />
                <h4>{activity.location.name}</h4>
              </IconAndText>
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
              height={mediaHeight}
              priority
            />
          </Media>

          <DetailsAndCTA>
            <Details>
              <DetailsSection>
                <SummaryContainer>
                  <h3>
                    <span>{capitalFirstLetter(activityTypeLabel)}</span> run by {activity.host.name}
                  </h3>
                  <IconAndText>
                    <Icon icon="Star" colour={colors.primary[6]} />
                    <h4>New</h4>
                  </IconAndText>
                  <HostLogoContainer>
                    <HostLogoImage
                      src={`/images/hosts/${activity.host.id}.jpg`}
                      alt={`${activity.host.name} logo`}
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

                  {experienceLevel && (
                    <KeyInfoItem>
                      <Icon icon={experienceLevel.icon} width={spacing[6]} height={spacing[6]} />
                      <InfoAndCaption>
                        <h5>{experienceLevel.name}</h5>
                        <h6>{experienceLevel.description}</h6>
                      </InfoAndCaption>
                    </KeyInfoItem>
                  )}

                  {intensityLevel && (
                    <KeyInfoItem>
                      <Icon icon={intensityLevel.icon} width={spacing[6]} height={spacing[6]} />
                      <InfoAndCaption>
                        <h5>{intensityLevel.name}</h5>
                        <h6>{intensityLevel.description}</h6>
                      </InfoAndCaption>
                    </KeyInfoItem>
                  )}

                  <KeyInfoItem>
                    <Icon icon={ageRange.icon} width={spacing[6]} height={spacing[6]} />
                    <InfoAndCaption>
                      <h5>{ageRange.name}</h5>
                      <h6>{ageRange.description}</h6>
                    </InfoAndCaption>
                  </KeyInfoItem>

                  {/* <KeyInfoItem>
                    <Icon icon="MedalColour" width={spacing[6]} height={spacing[6]} />
                    <InfoAndCaption>
                      <h5>Highly qualified host</h5>
                      <h6>This host is a verified expert</h6>
                    </InfoAndCaption>
                  </KeyInfoItem> */}
                </KeyInformation>
              </DetailsSection>

              <DetailsSection>
                <h3>About this {activityTypeLabel}</h3>
                <ReadMore lines={4} text={activity.description} />
              </DetailsSection>

              <DetailsSection>
                <h3>Getting there</h3>

                {activity.location.address && (
                  <GettingThereSection>
                    <IconAndText>
                      <Icon icon="Pin" />
                      <h4>Address</h4>
                    </IconAndText>
                    <Address>
                      <p>{activity.location.name}</p>
                      <p>{activity.location.address}</p>
                      <p>{activity.location.postcode}</p>
                    </Address>
                  </GettingThereSection>
                )}

                {activity.location.directions && (
                  <GettingThereSection>
                    <IconAndText>
                      <Icon icon="Directions" />
                      <h4>Directions</h4>
                    </IconAndText>
                    <ReadMore lines={4} text={activity.location.directions} />
                  </GettingThereSection>
                )}

                <MiniMap
                  location={activity.location}
                  initialViewState={{ longitude: activity.location.long, latitude: activity.location.lat, zoom: 11 }}
                />
              </DetailsSection>

              <h3>About the host</h3>

              <HostHeadline>
                <HostLogoContainer>
                  <HostLogoImage
                    src={`/images/hosts/${activity.host.id}.jpg`}
                    alt={`${activity.host.name} logo`}
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

              {activity.host.description && <ReadMore lines={4} text={activity.host.description} />}

              {/* <h3>Activities like this</h3>
              <p>OTHER ACTIVITIES PLACEHOLDER</p> */}
            </Details>

            <CTATablet>
              <StickyCTA>
                <BookNowContainer>
                  <h3>Join this {activityTypeLabel}</h3>
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
            <h4>Join this {activityTypeLabel}</h4>
          </div>
          <CTAButton>Book now</CTAButton>
        </CTAMobile>
      </Container>
    </>
  );
};

export default ActivityPage;

export const getServerSideProps = getActivityPageServerProps;
