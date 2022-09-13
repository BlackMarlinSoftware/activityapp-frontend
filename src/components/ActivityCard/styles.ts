import styled from 'styled-components';
import theme, { spacing } from '../../styles/theme';
import Image from 'next/image';
import { device } from '../../styles/devices';
import { ShimmerBackground } from '../../styles/loading';

export const ActivityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing[4]};
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: auto;

  @media ${device.laptop} {
    grid-template-columns: ${spacing[12]} 1fr;
  }
`;

export const ActivityDetails = styled.div<{ $loading: boolean }>`
  padding: ${spacing[2]} 0;

  h4 {
    margin-top: 0;
    ${(props) => (props.$loading ? 'color: transparent;' : '')}
  }

  h5 {
    margin-top: ${spacing[1]};
    color: ${(props) => (props.$loading ? 'transparent' : theme.colors.neutral[6])};
  }

  * {
    height: ${(props) => (props.$loading ? spacing[4] : 'auto')};
    border-radius: ${(props) => (props.$loading ? spacing[1] : 0)};
    ${(props) => (props.$loading ? ShimmerBackground : '')};
  }
`;

export const Description = styled.p<{ $loading: boolean }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${(props) => (props.$loading ? 'color: transparent;' : '')}
  ${(props) => (props.$loading ? ShimmerBackground : '')};

  @media ${device.mobileXL} {
    -webkit-line-clamp: 4;
  }
`;

export const ActivityImage = styled(Image)`
  border-radius: ${spacing[3]};
  ${ShimmerBackground}
`;
