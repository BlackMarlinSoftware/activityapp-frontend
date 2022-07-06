import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M8,0C4,0,0,1.4,0,4v4c0,4.4,3.6,8,8,8s8-3.6,8-8V4C16,1.4,12,0,8,0z M8,2c3.7,0,6,1.3,6,2s-2.3,2-6,2 S2,4.7,2,4S4.3,2,8,2z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
