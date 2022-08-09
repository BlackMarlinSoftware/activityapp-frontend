import Image from 'next/image';
import styled from 'styled-components';
import { HeaderHeight } from '../../components/Header/styles';
import { device } from '../devices';
import { colors, shadows, spacing } from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing[6]} ${spacing[4]};

  @media ${device.mobileXL} {
    padding: ${spacing[6]};
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-areas:
    'title'
    'media'
    'details';
  grid-template-columns: 1fr;
  row-gap: ${spacing[6]};
  width: 100%;
  max-width: ${spacing[18]};

  @media ${device.tablet} {
    grid-template-columns: 1fr ${spacing[12]};
    column-gap: ${spacing[7]};
    grid-template-areas:
      'title title'
      'media media'
      'details cta';
  }

  @media ${device.laptop} {
    column-gap: ${spacing[9]};
    grid-template-columns: 2fr 1fr;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: title;
  grid-gap: ${spacing[2]};
`;

export const Media = styled.div`
  display: flex;
  grid-area: media;
  margin-bottom: ${spacing[4]};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: details;
`;

export const CTATablet = styled.div`
  grid-area: cta;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export const CTAMobile = styled.div`
  display: grid;
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  width: 100vw;
  background-color: hsla(0, 0%, 100%, 0.7);
  backdrop-filter: blur(${spacing[2]});
  grid-template-columns: 1fr ${spacing[10]};
  align-items: center;
  box-shadow: ${shadows.even};
  padding: ${spacing[4]};

  @media ${device.mobileXL} {
    padding: ${spacing[4]} ${spacing[6]};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const TitleAndIcon = styled.div`
  display: flex;
  grid-gap: ${spacing[3]};
  flex-direction: column;

  @media ${device.mobileXL} {
    align-items: center;
    flex-direction: row;
  }
`;

export const LocationAndActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: ${spacing[3]};

  @media ${device.mobileXL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ActivityImage = styled(Image)`
  border-radius: ${spacing[3]};
`;

export const HostLogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
`;

export const HostLogoImage = styled(Image)`
  border-radius: ${spacing[10]};
`;

export const DetailsSection = styled.div`
  padding-bottom: ${spacing[5]};
  margin-bottom: ${spacing[5]};
  border-bottom: 1px solid ${colors.neutral[9.5]};
`;

export const KeyInformation = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${spacing[5]};
`;

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-areas:
    'title logo'
    'details logo';
  grid-template-columns: 1fr auto;
  grid-gap: ${spacing[4]};

  h3 {
    grid-area: title;
    line-height: 1em;
  }

  p {
    grid-area: details;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  grid-gap: ${spacing[2]};
  align-items: center;
`;

export const KeyInfoItem = styled.div`
  display: flex;
  grid-gap: ${spacing[4]};
  align-items: center;
`;

export const InfoAndCaption = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StickyCTA = styled.div`
  position: sticky;
  top: calc(${HeaderHeight} + ${spacing[6]});
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: ${spacing[6]};
`;

export const BookNowContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ${spacing[3]};
  border: 1px solid ${colors.neutral[9]};
  padding: ${spacing[5]};
  box-shadow: ${shadows.even};
  grid-gap: ${spacing[4]};
  text-align: center;

  @media ${device.laptop} {
    padding: ${spacing[6]};
  }
`;

export const CTAButton = styled.button`
  padding: ${spacing[4]};
  width: 100%;
  border: none;
  border-radius: ${spacing[2]};
  color: ${colors.supporting.grey[10]};
  font-weight: 600;
  font-size: ${spacing[4]};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: none;

  &::after,
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    background: radial-gradient(circle at center, ${colors.primary[7]} 0%, ${colors.primary[5]} 100%);
  }

  &::after {
    background: linear-gradient(90deg, ${colors.primary[7]}, ${colors.primary[5]});
    opacity: 1;
    transition: opacity 1s;
  }

  &:hover::after {
    opacity: 0;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing[4]} 0;

  * {
    margin: 0;
  }
`;

export const GettingThereSection = styled.div`
  margin-top: ${spacing[4]};
  margin-bottom: ${spacing[6]};
`;

export const HostHeadline = styled.div`
  display: flex;
  column-gap: ${spacing[4]};
  align-items: center;
  margin: ${spacing[5]} 0;
`;

export const HostCertifications = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${spacing[4]};
  margin: ${spacing[6]} 0;
  margin-left: -${spacing[1]};
`;
