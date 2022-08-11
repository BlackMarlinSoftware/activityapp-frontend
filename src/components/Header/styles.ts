import styled from 'styled-components';
import { device } from '../../styles/devices';
import { spacing, colors, shadows } from '../../styles/theme';

export const HeaderHeight = `${spacing[8]}`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 100vw;
  height: ${HeaderHeight};
  background-color: ${colors.supporting.grey[10]};
  box-shadow: ${shadows.divider};
`;

export const HeaderContent = styled.div<{ widthConstrained: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: ${HeaderHeight};
  max-width: ${({ widthConstrained }) => (widthConstrained ? spacing[18] : 'initial')};
  padding: 0 ${spacing[4]};

  @media ${device.mobileXL} {
    padding: 0 ${spacing[6]};
  }
`;

export const Menu = styled.div`
  display: flex;
`;

export const Shortcuts = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
