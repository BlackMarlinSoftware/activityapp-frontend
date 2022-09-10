import styled from 'styled-components';
import { device } from '../../styles/devices';
import { listWidth } from '../../styles/pages/activities.styles';
import { HeaderHeight } from '../Header/styles';

export const Container = styled.div`
  width: 100%;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: ${HeaderHeight};
  height: calc(100vh - ${HeaderHeight});
  width: 100vw;

  @media ${device.laptop} {
    width: calc(100vw - ${listWidth});
  }
`;
