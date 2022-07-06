import { HeaderContainer, Logo, Menu, Shortcuts } from './styles';
import Bars from '../icons/genericIcons/Bars';
import theme from '../../styles/theme';
import HeartButton from '../uiComponents/heartButton';

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