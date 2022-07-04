import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <rect data-color="color-2" x="5" y="7" width="6" height="2"></rect>
      <path d="M16,7h-1V3c0-0.5522461-0.4477539-1-1-1h-1c-0.5522461,0-1,0.4477539-1,1v10c0,0.5522461,0.4477539,1,1,1h1 c0.5522461,0,1-0.4477539,1-1V9h1V7z"></path>
      <path d="M3,2H2C1.4477539,2,1,2.4477539,1,3v4H0v2h1v4c0,0.5522461,0.4477539,1,1,1h1c0.5522461,0,1-0.4477539,1-1V3 C4,2.4477539,3.5522461,2,3,2z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
