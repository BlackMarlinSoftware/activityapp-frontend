import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="12.989" cy="3.011" r="1.989"></circle>
      <path d="M7.3,9.736,5.542,10.79l1.509,4.526a1,1,0,0,0,1.9-.632Z"></path>
      <path d="M13.867,10.522,10.786,4.729a1.494,1.494,0,0,0-.689-.6L4.5,1.086a1,1,0,1,0-.958,1.756L7.456,4.977,3.728,7.214a1.489,1.489,0,0,0-.683.924l-2,6.568a1,1,0,0,0,1.912.588l1.554-5.05L7.75,8.3,9.771,7.087l2.339,4.391a1,1,0,1,0,1.757-.956Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
