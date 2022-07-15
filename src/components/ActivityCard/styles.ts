import styled from 'styled-components';
import { spacing } from '../../styles/theme';
import Image from 'next/image';

export const ActivityContainer = styled.div`
  display: grid;
  grid-template-columns: ${spacing[12]} 1fr;
  grid-gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};
`;

export const ActivityDetails = styled.div`
  padding: ${spacing[2]} 0;

  h4 {
    margin-top: 0;
  }

  h5 {
    margin-top: ${spacing[1]};
  }
`;

export const Description = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ActivityImage = styled(Image)`
  border-radius: ${spacing[4]};
`;
