import styled from 'styled-components';
import { spacing } from '../../styles/theme';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: ${spacing['5']};
  justify-content: space-between;
  align-items: center;
  height: ${spacing['5']};
`;

export const Logo = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Shortcuts = styled.div`
  display: flex;
  align-items: center;
`;
