import styled from 'styled-components';
import { spacing } from '../theme';
import { device } from '../devices';

export const PageContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: ${spacing[9]} calc(100vh - ${spacing[9]});
`;

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.laptop} {
    grid-template-columns: ${spacing[15]} 1fr;
  }
`;

export const ListResponsiveWrapper = styled.div<{ mapView: boolean }>`
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`;

export const MapResponsiveWrapper = styled.div<{ mapView: boolean }>`
  display: none;
  @media ${device.laptop} {
    display: flex;
  }
`;

export const ListMapSwitcherButton = styled.button`
  @media ${device.tablet} {
    display: none;
  }
  position: fixed;
  bottom: 0;
`;
