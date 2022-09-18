import Link from 'next/link';
import { useState } from 'react';
import useBackUrl from '../../hooks/useBackUrl';
import Icon from '../Icon';
import { BackButtonContainer, HeaderContainer, HeaderContent, Menu, ShareButtonContainer, Shortcuts } from './styles';
// import HeartCircleButton from '../uiComponents/HeartCircleButton';

interface Props {
  widthConstrained: boolean;
}

const Header = ({ widthConstrained }: Props): JSX.Element => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const backUrl = useBackUrl();

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
          {copiedToClipboard ? (
            <h4>Copied link</h4>
          ) : (
            <ShareButtonContainer onClick={share}>
              <Icon icon="Share" />
            </ShareButtonContainer>
          )}
          {/* <HeartCircleButton /> */}
        </Shortcuts>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
