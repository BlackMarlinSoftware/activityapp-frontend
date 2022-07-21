import { Dots, FloatingContainer, Pill } from './styles';

const LoadingFloat = (): JSX.Element => {
  return (
    <FloatingContainer>
      <Pill>
        <Dots />
      </Pill>
    </FloatingContainer>
  );
};

export default LoadingFloat;
