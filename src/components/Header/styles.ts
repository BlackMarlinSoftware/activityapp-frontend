import styled from 'styled-components';
import { device } from '../../styles/devices';
import { spacing, colors, shadows } from '../../styles/theme';

export const HeaderHeight = `${spacing[8]}`;

interface HeaderElementProps {
  transparentMode: boolean;
}

export const HeaderContainer = styled.div<HeaderElementProps>`
  position: ${({ transparentMode }) => (transparentMode ? 'absolute' : 'sticky')};
  top: 0;
  z-index: 1;
  box-sizing: border-box;
  width: 100vw;
  height: ${HeaderHeight};
  box-shadow: ${({ transparentMode }) => (transparentMode ? 'none' : shadows.divider)};
  background-color: ${({ transparentMode }) => (transparentMode ? 'transparent' : colors.supporting.grey[10])};

  @media ${device.mobileXL} {
    box-shadow: ${shadows.divider};
    position: sticky;
    background-color: ${colors.supporting.grey[10]};
  }
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

const ButtonContainer = styled.div<HeaderElementProps>`
  padding: ${spacing[2]};
  border-radius: ${spacing[10]};
  cursor: pointer;
  background-color: ${({ transparentMode }) => (transparentMode ? 'rgba(255, 255, 255, 0.8)' : 'none')};
  backdrop-filter: ${({ transparentMode }) => (transparentMode ? `blur(${spacing[1]})` : 'none')};

  @media ${device.mobileXL} {
    background-color: none;
    backdrop-filter: none;
  }
`;

export const BackButtonContainer = styled(ButtonContainer)`
  margin-left: -${spacing[1]};
  width: fit-content;
`;

export const ShareButtonContainer = styled(ButtonContainer)``;

export const LogoContainer = styled.div<HeaderElementProps>`
  opacity: ${({ transparentMode }) => (transparentMode ? 0 : 1)};

  @media ${device.mobileXL} {
    opacity: 1;
  }
`;