import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <polygon data-color="color-2" points="13,16 1,16 0,13 16,13 "></polygon>
      <polygon points="11,5 11,11 15,11 "></polygon> <polygon points="1,11 9,11 9,0 "></polygon>
    </g>
  </svg>
);

export default withSvgColour(Icon);
