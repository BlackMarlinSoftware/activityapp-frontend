import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15.707,0.293c-0.273-0.272-0.68-0.365-1.043-0.234l-14,5C0.287,5.193,0.026,5.54,0.002,5.939 c-0.024,0.4,0.192,0.775,0.551,0.955l4.586,2.292L11,5l-4.187,5.862l2.292,4.586C9.276,15.787,9.623,16,10,16 c0.021,0,0.041-0.001,0.061-0.002c0.4-0.024,0.747-0.284,0.882-0.662l5-14C16.072,0.973,15.98,0.566,15.707,0.293z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
