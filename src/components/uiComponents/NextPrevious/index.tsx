import { colors, spacing } from '../../../styles/theme';
import Icon from '../../Icon';
import { Container, Middle, End, Pill } from './styles';

interface Props {
  position: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
}

const doNothing = undefined;

const NextPrevious = ({ position, total, onPrevious, onNext }: Props) => {
  const previousEnabled = position > 1;
  const nextEnabled = position < total;
  const getButtonColour = (enabled: boolean) => (enabled ? colors.neutral[1] : colors.neutral[9]);

  return (
    <Container>
      <Pill>
        <End onClick={previousEnabled ? onPrevious : doNothing}>
          <Icon
            icon="LeftArrowSmall"
            width={spacing[3]}
            height={spacing[3]}
            colour={getButtonColour(previousEnabled)}
          />
        </End>
        <Middle>
          <small style={{ margin: 0 }}>
            {position} of {total}
          </small>
        </Middle>
        <End onClick={nextEnabled ? onNext : doNothing}>
          <Icon icon="RightArrowSmall" width={spacing[3]} height={spacing[3]} colour={getButtonColour(nextEnabled)} />
        </End>
      </Pill>
    </Container>
  );
};

export default NextPrevious;
