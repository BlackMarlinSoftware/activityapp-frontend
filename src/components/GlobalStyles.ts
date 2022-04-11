import { createGlobalStyle } from 'styled-components';
import normalizeCSS from './normalize-css';

const GlobalStyles = createGlobalStyle`
  ${normalizeCSS};
`;

export default GlobalStyles;
