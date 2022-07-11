import { HeaderContainer, Logo, Menu, Shortcuts } from './styles';
import theme from '../../styles/theme';
import HeartButton from '../uiComponents/heartButton';
import Bars from '../Icon/genericIcons/Bars';

const Header = (): JSX.Element => (
  <HeaderContainer>
    <Logo>App</Logo>
    <Menu>Categories</Menu>
    <Shortcuts>
      <HeartButton />
      <Bars colour={theme.colors.primary['5']} />
    </Shortcuts>
  </HeaderContainer>
);

export default Header;