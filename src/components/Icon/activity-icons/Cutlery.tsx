import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M6,0,5.6,5H4.4L4,0H3L2.6,5H1.4L1,0H0V6A2,2,0,0,0,2,8v6.5a1.5,1.5,0,0,0,3,0V8A2,2,0,0,0,7,6V0Z"></path>
      <path
        data-color="color-2"
        d="M15,0a5,5,0,0,0-5,5v6h2v3.5A1.5,1.5,0,0,0,13.5,16h0A1.5,1.5,0,0,0,15,14.5V0Z"
      ></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
