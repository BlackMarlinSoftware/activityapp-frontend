import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M13.9,3.8c-3.6-1.7-6.6,1.8-8,0c-0.5-0.7,0.7-2,0-2.9c-0.5-0.6-1.7-0.5-2.4,0C1.4,2.4,0,4.8,0,7.5 c0,4.4,3.6,8,8,8c3.7,0,6.8-2.5,7.7-5.9C16.1,8.5,16.5,5.1,13.9,3.8z M3,8C2.4,8,2,7.6,2,7c0-0.6,0.4-1,1-1s1,0.4,1,1 C4,7.6,3.6,8,3,8z M5,12c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1s1,0.4,1,1C6,11.6,5.6,12,5,12z M9,14c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C10,13.6,9.6,14,9,14z M12,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C14,9.1,13.1,10,12,10z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);