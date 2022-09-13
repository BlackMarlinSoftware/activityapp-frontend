import Icon from '../Icon';
import ContactButton from '../uiComponents/ContactButton';
import { HeaderContainer, HeaderContent, Menu, Shortcuts } from './styles';
// import HeartCircleButton from '../uiComponents/HeartCircleButton';

interface Props {
  widthConstrained: boolean;
}

const Header = ({ widthConstrained }: Props): JSX.Element => (
  <HeaderContainer>
    <HeaderContent widthConstrained={widthConstrained}>
      <h2>Logo</h2>
      <Menu>Categories list TODO</Menu>
      <Shortcuts>
        <ContactButton />
        {/* <HeartCircleButton /> */}
      </Shortcuts>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
