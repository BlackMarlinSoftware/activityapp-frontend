import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="7.5" cy="2" r="2"></circle>
      <path d="M14,5H6A1,1,0,0,0,5,6v4.764L3.105,14.553a1,1,0,0,0,1.79.894L7.306,11,9,12.414V15a1,1,0,0,0,2,0V12a1,1,0,0,0-.293-.707L9,9.586V7h5a1,1,0,0,0,0-2Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
