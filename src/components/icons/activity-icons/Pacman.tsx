import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="14.5" cy="8" r="1.5" data-color="color-2"></circle>
      <path d="M15.174,4.436,14.923,4a8,8,0,1,0,0,7.994l.251-.433L9,8ZM8.5,4.5a1,1,0,1,1,1,1A1,1,0,0,1,8.5,4.5Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
