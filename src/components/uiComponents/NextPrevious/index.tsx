import { spacing } from '../../../styles/theme';
import Icon from '../../Icon';
import { Container, Middle, End, Pill } from './styles';

interface Props {
  position: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
}

const NextPrevious = ({ position, total, onPrevious, onNext }: Props) => (
  <Container>
    <Pill>
      <End onClick={onPrevious}>
        <Icon icon="LeftArrowSmall" width={spacing[3]} height={spacing[3]} />
      </End>
      <Middle>
        <small style={{ margin: 0 }}>
          {position} of {total}
        </small>
      </Middle>
      <End onClick={onNext}>
        <Icon icon="RightArrowSmall" width={spacing[3]} height={spacing[3]} />
      </End>
    </Pill>
  </Container>
);

export default NextPrevious;
