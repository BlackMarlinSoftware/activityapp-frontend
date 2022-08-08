import styled from 'styled-components';
import { HeaderHeight } from '../Header/styles';

export const Container = styled.div`
  width: 100%;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: ${HeaderHeight};
  height: calc(100vh - ${HeaderHeight});
  width: 100%;
`;
