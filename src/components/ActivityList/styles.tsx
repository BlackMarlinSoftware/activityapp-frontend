import styled from 'styled-components';
import theme from '../../styles/theme';

export const ActivityRows = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${theme.scale.spacing[6]};
  margin-top: ${theme.scale.spacing[6]};
`;
