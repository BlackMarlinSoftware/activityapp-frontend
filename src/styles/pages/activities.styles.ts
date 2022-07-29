import styled from 'styled-components';
import theme, { shadows, spacing } from '../theme';
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
  @media ${device.laptop} {
    display: none;
  }
  position: fixed;
  bottom: ${spacing[3]};
  left: 50%;
  transform: translateX(-50%);

  height: ${spacing[7]};
  width: ${spacing[11]};
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 0;
  box-shadow: ${shadows.light};
  backdrop-filter: blur(8px);
  color: ${theme.colors.supporting.grey[1]};

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  span {
    margin: 0 ${spacing[2]};
  }
`;
