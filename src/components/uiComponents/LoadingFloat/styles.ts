import styled from 'styled-components';
import { colors, shadows, spacing } from '../../../styles/theme';

export const FloatingContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Pill = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: ${shadows.light};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${spacing[10]};
  backdrop-filter: blur(${spacing[1]});
  margin: ${spacing[3]} 0;
  width: ${spacing[9]};
  height: ${spacing[6]};
`;

const dotsColour = colors.neutral[1];

export const Dots = styled.div`
  position: relative;

  box-shadow: 0 0 0 0px ${dotsColour};
  animation: dot-pulse 0.75s infinite ease-in-out;
  animation-delay: 0.1s;

  background-color: ${dotsColour};
  width: ${spacing[2]};
  height: ${spacing[2]};
  border-radius: 1000px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;

    box-shadow: 0 0 0 0px;
    animation: dot-pulse 0.75s infinite ease-in-out;

    background-color: ${dotsColour};
    width: ${spacing[2]};
    height: ${spacing[2]};
    border-radius: 100px;
  }

  &::before {
    animation-delay: 0s;
    left: -${spacing[4]};
  }

  &::after {
    animation-delay: 0.2s;
    left: ${spacing[4]};
  }

  @keyframes dot-pulse {
    0% {
      box-shadow: 0 0 0 0px ${dotsColour};
    }

    30% {
      box-shadow: 0 0 0 2px ${dotsColour};
    }

    60%,
    100% {
      box-shadow: 0 0 0 0px ${dotsColour};
    }
  }
`;
