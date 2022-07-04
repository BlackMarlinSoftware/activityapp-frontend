import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path
        data-color="color-2"
        d="M14.975,16A5.49,5.49,0,0,1,11.5,14.765a5.578,5.578,0,0,1-6.995,0A5.518,5.518,0,0,1,1.013,16H1a1,1,0,0,1,0-2h.013a3.532,3.532,0,0,0,2.719-1.273,1,1,0,0,1,.767-.36h0a1,1,0,0,1,.767.357,3.559,3.559,0,0,0,5.466,0,1,1,0,0,1,.767-.357h0a1,1,0,0,1,.768.362A3.5,3.5,0,0,0,14.975,14H15a1,1,0,0,1,.005,2Z"
      ></path>
      <path d="M11,6H9V1A1,1,0,0,0,8,0,5.006,5.006,0,0,0,3,5V9a1,1,0,0,0,1,1H7v2a1,1,0,0,0,2,0V8h2a1,1,0,0,0,0-2Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
