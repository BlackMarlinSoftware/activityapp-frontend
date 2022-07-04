import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15,11a1,1,0,0,0,1-1V8.941a2.5,2.5,0,0,0-1.735-2.379L11.3,5.75A4.5,4.5,0,0,1,8.183,2.7l-.6-1.99A1,1,0,0,0,6.628,0H1A1,1,0,0,0,0,1v9a1,1,0,0,0,1,1H2v2H1a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2H14V11Zm-3,2H4V11a1,1,0,0,0,1-1V9l4,2h3Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
