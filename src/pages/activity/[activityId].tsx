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
  IconAndText,
  LocationAndActions,
  Address,
  GettingThereSection,
  HostHeadline,
  HostCertifications,
  StickyCTA,
} from '../../styles/pages/activity.styles';
import { colors, spacing } from '../../styles/theme';

export interface Props {}

const ActivityPage: NextPage<Props> = ({}) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const { windowWidth } = useWindowSize();

  const share = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator.share({ url: currentUrl, text: 'Kitesurfing taster day in Southampton' });
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
            <TitleAndIcon>
              <Icon icon="Kitesurfing" width="24px" height="24px" />
              <h2>Kitesurfing taster day</h2>
            </TitleAndIcon>
            <LocationAndActions>
              <h4>Hill Head Beach, Southampton</h4>
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
              src={`/images/demo/kitesurfing.jpeg`}
              alt={'TODO' || undefined}
              objectFit="cover"
              objectPosition="center"
              width={spacing[18]}
              height={spacing[windowWidth && windowWidth < deviceWidth.mobileXL ? 15 : 14]}
            />
          </Media>

          <Details>
            <DetailsSection>
              <SummaryContainer>
                <h3>Class run by Fareham Watersports</h3>
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
                </KeyInfoItem>
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
              <ReadMore
                lines={4}
                text={`This is your introduction to the fastest growing sport of the 21st century. Your first day course provides all the fundamentals of kite flying. We will take you through launching and landing, pre-flight checks, water relaunching, water safety packdown and body dragging through the shallow water pools at Hill Head. At the end of your one day kitesurfing lesson you will no doubt be eager to come back for a second day (Day 2) where we introduce the kiteboard.
                
                The day one course is a great intro into the sport. We run this course as a group so you will have up to two people with one instructor. The initial intro will be on land flying a trainer kite where we will brief you on safety, talk about wind/weather and explain what we will be doing during your course. The gear used on this course will be the latest and most high end beginner equipment on the market. We take pride in the fact that we use the best gear so we aim to teach you all of the basics carefully, not only for you to learn the correct way but so we don't damage any of our lovely new gear.`}
              />
            </DetailsSection>

            <DetailsSection>
              <h3>Getting to Hill Head Beach</h3>

              <GettingThereSection>
                <h4>Address</h4>

                <Address>
                  <p>12 Eastleigh Road</p>
                  <p>Meon Shore</p>
                  <p>Southampton</p>
                  <p>SO34 2ND</p>
                </Address>
              </GettingThereSection>

              <GettingThereSection>
                <h4>Directions</h4>

                <ReadMore
                  lines={4}
                  text={`Head towards the beach via the usual entrance, then turn left when you see the large sand dune. Meet by
                the arches.`}
                />
              </GettingThereSection>

              <MiniMap
                location={{ id: 'todo', long: -1.2521447, lat: 50.8192844, name: 'todo', outdoors: true }}
                initialViewState={{ longitude: -1.2521447, latitude: 50.8192844, zoom: 11 }}
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
                  <h4>Fareham Watersports</h4>
                  <h6>25 activities</h6>
                </div>
              </HostHeadline>

              <HostCertifications>
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
              </HostCertifications>

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

// export const getServerSideProps = getActivityPageServerProps;
