import Image from 'next/image';
import styled from 'styled-components';
import { colors, spacing } from '../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing[6]} ${spacing[4]};
`;

export const Main = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'media media'
    'details cta';
  grid-template-columns: 2fr 1fr;
  row-gap: ${spacing[6]};
  column-gap: ${spacing[9]};
  width: 100%;
  max-width: ${spacing[18]};
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

export const CTA = styled.div`
  display: flex;
  grid-area: cta;
`;

export const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: ${spacing[3]};
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

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-areas:
    'title logo'
    'details logo';
  grid-template-columns: 1fr auto;
  column-gap: ${spacing[4]};

  h3 {
    grid-area: title;
    line-height: 1em;
  }

  p {
    grid-area: details;
  }
`;
