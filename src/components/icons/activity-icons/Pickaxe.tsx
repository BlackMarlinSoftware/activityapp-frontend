import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M6.818,7.06.293,13.586A1,1,0,0,0,.293,15L1,15.707a1,1,0,0,0,1.414,0L8.939,9.182Z"></path>
      <path
        data-color="color-2"
        d="M4.158.46a1,1,0,0,1,1.189-.4,17.941,17.941,0,0,1,5.4,3.189l.544-.544a1,1,0,0,1,1.414,0l.586.586a1,1,0,0,1,0,1.414l-.544.544a17.9,17.9,0,0,1,3.189,5.4,1,1,0,0,1-1.645,1.054l-10-10A1,1,0,0,1,4.158.46Z"
      ></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
