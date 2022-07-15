import styled from 'styled-components';
import { spacing, colors } from '../../styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  background-color: white;
  padding: 0 ${spacing[6]};
  justify-content: space-between;
  align-items: center;
  box-shadow: ${colors.neutral[10]} 0px 1px 1px;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Shortcuts = styled.div`
  display: flex;
  align-items: center;
`;
