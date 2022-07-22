import styled, { css } from 'styled-components';
import { ShimmerBackground } from '../../styles/loading';
import { spacing } from '../../styles/theme';

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

  * {
    width: 100%;
    height: ${spacing[4]};
    border-radius: ${spacing[1]};
    ${ShimmerBackground}
  }
`;

export const Description = styled.p`
  width: 100%;
  height: ${spacing[7]};
  margin: ${spacing[2]}
  border-radius: ${spacing[1]};
  ${ShimmerBackground}
`;

export const ActivityImage = styled.div`
  width: ${spacing[12]};
  height: ${spacing[11]};
  border-radius: ${spacing[3]};
  ${ShimmerBackground}
`;
