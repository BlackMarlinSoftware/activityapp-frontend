import styled from 'styled-components';
import { spacing, colors } from '../../styles/theme';

export const Container = styled.div`
  box-shadow: ${colors.neutral[9.5]} 0px 1px 1px;
  z-index: 1;
`;

export const HeaderContent = styled.div<{ widthConstrained: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin: auto;
  padding: 0 ${spacing[6]};
  justify-content: center;
  align-items: center;
  height: ${spacing[9]};
  max-width: ${({ widthConstrained }) => (widthConstrained ? spacing[18] : 'initial')};
`;

export const Menu = styled.div`
  display: flex;
`;

export const Shortcuts = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
