import { HeaderContainer, Logo, Menu, Shortcuts } from './styles';
import Bars from '../icons/genericIcons/Bars';

const Header = (): JSX.Element => (
  <HeaderContainer>
    <Logo>App</Logo>
    <Menu>Categories</Menu>
    <Shortcuts><Bars /></Shortcuts>
  </HeaderContainer>
);

export default Header;