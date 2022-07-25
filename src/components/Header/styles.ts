import styled from 'styled-components';
import { spacing, colors } from '../../styles/theme';

export const HeaderHeight = `${spacing[9]}`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  height: ${HeaderHeight};
  background-color: ${colors.supporting.grey[10]};
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
