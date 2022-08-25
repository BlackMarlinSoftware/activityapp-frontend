import styled from 'styled-components';
import theme, { spacing } from '../../styles/theme';
import Image from 'next/image';
import { device } from '../../styles/devices';
import { ShimmerBackground } from '../../styles/loading';

export const ActivityContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing[4]};
  margin-bottom: ${spacing[6]};
  padding: ${spacing[2]};
  box-sizing: border-box;
  cursor: pointer;

  @media ${device.mobileXL} {
    width: 50%;
  }
  @media ${device.laptop} {
    grid-template-columns: ${spacing[12]} 1fr;
    width: 100%;
    padding: 0;
  }
`;

export const ActivityDetails = styled.div<{ $loading: boolean }>`
  padding: ${spacing[2]} 0;

  h4 {
    margin-top: 0;
    color: ${(props) => (props.$loading ? 'transparent' : 'initial')};
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
  color: ${(props) => (props.$loading ? 'transparent' : 'initial')};
  ${(props) => (props.$loading ? ShimmerBackground : '')};

  @media ${device.mobileXL} {
    -webkit-line-clamp: 4;
  }
`;

export const ActivityImage = styled(Image)`
  border-radius: ${spacing[3]};
  ${ShimmerBackground}
`;
