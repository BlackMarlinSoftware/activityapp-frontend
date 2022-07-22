import styled from 'styled-components';
import { spacing, colors } from '../../styles/theme';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 0 ${spacing[6]};
  justify-content: center;
  align-items: center;
  box-shadow: ${colors.neutral[9.5]} 0px 1px 1px;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Shortcuts = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
