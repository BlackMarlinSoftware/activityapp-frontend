import styled from 'styled-components';
import theme, { spacing, colors, shadows } from '../../styles/theme';
import { device } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[6]} ${spacing[4]};

  @media ${device.mobileXL} {
    padding: ${spacing[6]};
  }
`;

export const ResultsSummary = styled.div<{ borderBottom: boolean }>`
  margin-bottom: ${spacing[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ borderBottom }) => (borderBottom ? shadows.divider : 'none')};

  h4 {
    margin: 0;
  }
`;

export const ActivityRows = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${spacing[6]};
  grid-template-columns: 1fr;

  @media ${device.mobileXL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`;
