import styled from 'styled-components';
import theme, { spacing } from '../theme';
import { device } from '../devices';

export const PageContainer = styled.div`
  overflow: auto;
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
  display: ${(props) => (props.mapView ? 'none' : 'flex')};
  @media ${device.laptop} {
    display: flex;
  }
`;

export const MapResponsiveWrapper = styled.div<{ mapView: boolean }>`
  display: ${(props) => (props.mapView ? 'flex' : 'none')};
  @media ${device.laptop} {
    display: flex;
  }
`;

export const ListMapSwitcherButton = styled.button`
  @media ${device.tablet} {
    display: none;
  }
  position: fixed;
  bottom: ${spacing[3]};
  left: 50%;
  transform: translateX(-50%);

  height: ${spacing[6]};
  width: ${spacing[10]};
  border-radius: 30px;
  border: 2px solid ${theme.colors.neutral[9]};
  background-color: ${theme.colors.supporting.grey[2]};
  border: none;
  color: ${theme.colors.supporting.grey[10]};
`;
