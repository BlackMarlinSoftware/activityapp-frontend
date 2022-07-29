import styled from 'styled-components';
import theme, { spacing, colors } from '../../styles/theme';
import { device } from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsSummary = styled.div<{ borderBottom: boolean }>`
  padding: ${spacing[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ borderBottom }) => (borderBottom ? `${colors.neutral[9.5]} 0px 1px 1px;` : 'none')};

  h4 {
    margin: 0;
  }
`;

export const ActivityRows = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 ${theme.scale.spacing[6]};
  @media ${device.mobileXL} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
`;
