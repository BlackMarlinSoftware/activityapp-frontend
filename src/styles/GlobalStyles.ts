import { createGlobalStyle } from 'styled-components';
import normalizeCSS from './normalize-css';
import inter from './inter';
import typography from './typography';
import { colors } from './theme';

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};
  ${inter};
  ${typography};

  body {
    color: ${colors.supporting.grey[2]};
  }
  
  // General global things:
  .mapboxgl-control-container {
    display: none;
  }
`;

export default GlobalStyles;
