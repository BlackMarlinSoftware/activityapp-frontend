import Link from 'next/link';
import useBackUrl from '../../hooks/useBackUrl';
import Icon from '../Icon';
import ContactButton from '../uiComponents/ContactButton';
import { BackButtonContainer, HeaderContainer, HeaderContent, Menu, Shortcuts } from './styles';
// import HeartCircleButton from '../uiComponents/HeartCircleButton';

interface Props {
  widthConstrained: boolean;
}

const Header = ({ widthConstrained }: Props): JSX.Element => {
  const backUrl = useBackUrl();

  return (
    <HeaderContainer>
      <HeaderContent widthConstrained={widthConstrained}>
        {backUrl && (
          <Link href={backUrl} passHref>
            <BackButtonContainer>
              <Icon icon="LeftArrow" />
            </BackButtonContainer>
          </Link>
        )}
        <h2>Logo</h2>
        {!backUrl && <Menu>Categories</Menu>}
        <Shortcuts>
          <ContactButton />
          {/* <HeartCircleButton /> */}
        </Shortcuts>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
