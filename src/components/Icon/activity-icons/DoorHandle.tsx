import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15,3H8V1A1,1,0,0,0,7,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V8H6v6H2V2H6V3H4A1,1,0,0,0,3,4V5A1,1,0,0,0,4,6H15a1,1,0,0,0,1-1V4A1,1,0,0,0,15,3Z"></path>
      <rect x="3" y="9" width="2" height="3" rx="0.5" data-color="color-2"></rect>
    </g>
  </svg>
);

export default withSvgColour(Icon);
