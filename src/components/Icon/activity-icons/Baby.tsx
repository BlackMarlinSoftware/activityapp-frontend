import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M14.333,5.034a6.988,6.988,0,0,0-12.666,0,1.989,1.989,0,0,0-.626,3.711,7,7,0,0,0,13.918,0,1.989,1.989,0,0,0-.626-3.711ZM4.5,6.5a1,1,0,1,1,1,1A1,1,0,0,1,4.5,6.5ZM8,12a2,2,0,0,1-2-2h4A2,2,0,0,1,8,12Zm2.5-4.5a1,1,0,1,1,1-1A1,1,0,0,1,10.5,7.5Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);