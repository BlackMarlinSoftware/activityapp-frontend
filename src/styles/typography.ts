import { css } from 'styled-components';
import { device } from './devices';
import theme from './theme';

export default css`
  html,
  .root {
    font-size: 16px;
    line-height: 24px;
  }
  body,
  .article {
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    margin: auto;
  }
  small {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  h1,
  .h1 {
    font-family: Inter, sans-serif;
    font-size: 3.5rem;
    line-height: 4rem;
    margin-top: 1rem;
    margin-bottom: 2.5rem;

    @media ${device.mobileXL} {
      font-size: 4rem;
      line-height: 4.5rem;
      margin-top: 1.5rem;
      margin-bottom: 3rem;
    }
  }
  h2,
  .h2 {
    font-family: Inter, sans-serif;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media ${device.mobileXL} {
      font-size: 2rem;
      line-height: 3rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  h3,
  .h3 {
    font-family: Inter, sans-serif;
    font-size: 1.25rem;
    line-height: 2.5rem;
    margin-top: 1.25rem;
    margin-bottom: 0rem;

    @media ${device.mobileXL} {
      font-size: 1.5rem;
      line-height: 3rem;
      margin-top: 1.5rem;
    }
  }
  h4,
  .h4 {
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 0rem;
  }
  h5,
  .h5 {
    font-family: Inter, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0rem;
  }
  h6,
  .h6 {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 0rem;
    color: ${theme.colors.neutral[6]};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 0;
  }
  ul,
  ol,
  pre,
  table,
  blockquote {
    font-family: Inter, sans-serif;
    margin-top: 0rem;
    margin-bottom: 1.5rem;
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    font-family: Inter, sans-serif;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }

  hr,
  .hr {
    font-family: Inter, sans-serif;
    border: 1px solid;
    margin: -1px 0;
  }
  a,
  b,
  i,
  strong,
  em,
  code {
    font-family: Inter, sans-serif;
    line-height: 0;
  }
  sub,
  sup {
    font-family: Inter, sans-serif;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    font-family: Inter, sans-serif;
    top: -0.5em;
  }
  sub {
    font-family: Inter, sans-serif;
    bottom: -0.25em;
  }
  span {
    font-family: Inter, sans-serif;
  }
`;
