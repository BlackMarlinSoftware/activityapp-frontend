import { createGlobalStyle } from 'styled-components';
import normalizeCSS from './normalize-css';
import inter from './inter';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};
  ${inter};
  ${typography};
  
  // General global things:
  .mapboxgl-control-container {
    display: none;
  }
`;

export default GlobalStyles;
