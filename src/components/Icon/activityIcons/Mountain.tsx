import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <polygon data-color="color-2" points="10.66669,6 8,2 5.33331,6 "></polygon>
      <polygon points="12,8 4,8 0,14 16,14 "></polygon>
    </g>
  </svg>
);

export default withSvgColour(Icon);
