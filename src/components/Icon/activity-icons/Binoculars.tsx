import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15.2,7.7L15.2,7.7c-0.8-1.1-2.9-3.9-3.7-5l0,0C11.1,2.3,10.6,2,10,2C8.9,2,8,2.9,8,4c0-1.1-0.9-2-2-2 C5.4,2,4.9,2.3,4.5,2.7l0,0c-0.8,1-2.9,3.8-3.7,5l0,0C0.3,8.3,0,9.1,0,10c0,2.2,1.8,4,4,4s4-1.8,4-4c0,2.2,1.8,4,4,4s4-1.8,4-4 C16,9.1,15.7,8.3,15.2,7.7z M4,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S5.1,12,4,12z M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,12,12,12z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);