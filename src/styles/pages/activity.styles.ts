import Image from 'next/image';
import styled from 'styled-components';
import { spacing } from '../theme';

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
  grid-gap: ${spacing[6]};
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

export const ActivityImage = styled(Image)`
  border-radius: ${spacing[3]};
`;
