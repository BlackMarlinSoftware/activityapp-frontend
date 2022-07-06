import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M14,5V0H2v5c0,3,2.2,5.4,5,5.9V14H3v2h10v-2H9v-3.1C11.8,10.4,14,8,14,5z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
