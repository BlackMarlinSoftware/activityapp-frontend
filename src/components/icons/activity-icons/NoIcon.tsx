import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="8" cy="8" r="8"></circle>
    </g>
  </svg>
);

export default withSvgColour(Icon);
