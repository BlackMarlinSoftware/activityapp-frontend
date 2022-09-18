import Link from 'next/link';
import { useState } from 'react';
import useBackUrl from '../../hooks/useBackUrl';
import Icon from '../Icon';
import {
  BackButtonContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  Menu,
  ShareButtonContainer,
  Shortcuts,
} from './styles';
// import HeartCircleButton from '../uiComponents/HeartCircleButton';

interface Props {
  widthConstrained: boolean;
  transparentVariant?: boolean;
}

const Header = ({ widthConstrained, transparentVariant }: Props): JSX.Element => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const backUrl = useBackUrl();
  const transparentMode = transparentVariant && backUrl ? true : false;

  const share = () => {
    const currentUrl = window.location.href;

    if (navigator.share) {
      navigator.share({ url: currentUrl });
    } else {
      navigator.clipboard.writeText(currentUrl).then(() => {
        setCopiedToClipboard(true);
      });
    }
  };

  return (
    <HeaderContainer transparentMode={transparentMode}>
      <HeaderContent widthConstrained={widthConstrained}>
        {backUrl && (
          <Link href={backUrl} passHref>
            <BackButtonContainer transparentMode={transparentMode}>
              <Icon icon="LeftArrow" />
            </BackButtonContainer>
          </Link>
        )}
        <LogoContainer transparentMode={transparentMode}>
          <h2>Logo</h2>
        </LogoContainer>
        {!backUrl && <Menu>Categories</Menu>}
        <Shortcuts>
          <ShareButtonContainer onClick={share} transparentMode={transparentMode}>
            {copiedToClipboard ? <h4>Copied link</h4> : <Icon icon="Share" />}
          </ShareButtonContainer>
          {/* <HeartCircleButton /> */}
        </Shortcuts>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
