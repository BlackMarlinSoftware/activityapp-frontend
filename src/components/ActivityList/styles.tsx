import styled from 'styled-components';
import theme, { colors } from '../../styles/theme';

export const Container = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const ResultsSummary = styled.div<{ borderBottom: boolean }>`
  padding: ${theme.scale.spacing[6]};
  display: flex;
  justify-content: space-between;
  z-index: 1;
  box-shadow: ${({ borderBottom }) => (borderBottom ? `${colors.neutral[10]} 0px 1px 1px;` : 'none')};

  h4 {
    margin: 0;
  }
`;

export const ActivityRows = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${theme.scale.spacing[6]};
  padding: 0 ${theme.scale.spacing[6]};
  overflow-y: scroll;
`;
