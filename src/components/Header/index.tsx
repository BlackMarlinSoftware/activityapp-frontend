import { HeaderContainer, HeaderContent, Menu, Shortcuts } from './styles';
import HeartButton from '../uiComponents/heartButton';

interface Props {
  widthConstrained: boolean;
}

const Header = ({ widthConstrained }: Props): JSX.Element => (
  <HeaderContainer>
    <HeaderContent widthConstrained={widthConstrained}>
      <h2>Logo</h2>
      <Menu>Categories list TODO</Menu>
      <Shortcuts>
        <HeartButton />
      </Shortcuts>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
