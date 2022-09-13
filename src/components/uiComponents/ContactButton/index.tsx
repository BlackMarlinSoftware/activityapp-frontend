import { Container } from './styles';
import Icon from '../../Icon';
import Link from 'next/link';

const ContactButton = (): JSX.Element => (
  <Link href="/contact" passHref>
    <Container>
      <Icon icon="SendMessage" />
    </Container>
  </Link>
);

export default ContactButton;
