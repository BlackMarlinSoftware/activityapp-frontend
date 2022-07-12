import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="8" cy="2" r="2"></circle>
      <path d="M14.9,3.553a1,1,0,0,0-1.342-.448L9.764,5H2A1,1,0,0,0,2,7H5v3.764L3.105,14.553a1,1,0,0,0,1.79.894L6.618,12H9v3a1,1,0,0,0,2,0V6.618l3.447-1.723A1,1,0,0,0,14.9,3.553Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
