import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="8" cy="8" r="2" data-color="color-2"></circle> <rect x="7" width="2" height="4"></rect>
      <rect x="12" y="7" width="4" height="2"></rect> <rect x="7" y="12" width="2" height="4"></rect>
      <rect y="7" width="4" height="2"></rect>
    </g>
  </svg>
);

export default withSvgColour(Icon);
