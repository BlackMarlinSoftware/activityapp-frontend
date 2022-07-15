import styled from 'styled-components';
import theme, { spacing, colors } from '../../styles/theme';

export const Container = styled.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const ResultsSummary = styled.div<{ borderBottom: boolean }>`
  padding: ${spacing[6]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  box-shadow: ${({ borderBottom }) => (borderBottom ? `${colors.neutral[10]} 0px 1px 1px;` : 'none')};

  h4 {
    margin: 0;
  }
`;

export const FilterTEMP = styled.h4`
  padding: ${spacing[1]} ${spacing[4]};
  border: 1px solid ${colors.neutral[9]};
  border-radius: ${spacing[2]};
`;

export const ActivityRows = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.scale.spacing[6]};
  overflow-y: scroll;
`;
