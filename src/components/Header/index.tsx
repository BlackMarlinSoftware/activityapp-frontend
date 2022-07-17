import { HeaderContainer, Menu, Shortcuts } from './styles';
import HeartButton from '../uiComponents/heartButton';

const Header = (): JSX.Element => (
  <HeaderContainer>
    <h2>Logo</h2>
    <Menu>Categories list TODO</Menu>
    <Shortcuts>
      <HeartButton />
    </Shortcuts>
  </HeaderContainer>
);

export default Header;
