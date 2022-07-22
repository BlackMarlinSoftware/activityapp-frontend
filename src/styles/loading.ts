import { css } from 'styled-components';
import { colors } from './theme';

export const ShimmerBackground = css`
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: linear-gradient(
    to right,
    ${colors.neutral[10]} 8%,
    ${colors.neutral[9.5]} 18%,
    ${colors.neutral[10]} 33%
  );
  background-size: 1200px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1200px 0;
    }
    100% {
      background-position: 1200px 0;
    }
  }
`;
