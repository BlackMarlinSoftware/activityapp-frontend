import styled from 'styled-components';
import { spacing } from '../theme';

export const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: ${spacing[9]} calc(100vh - ${spacing[9]});
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${spacing[15]} 1fr;
`;
