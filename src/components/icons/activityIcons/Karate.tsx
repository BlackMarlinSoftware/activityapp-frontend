import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="4" cy="2" r="2"></circle>
      <path d="M13.8,6.02,9.46,6.888,8.869,6H10a1,1,0,0,0,.895-.553l1-2a1,1,0,1,0-1.79-.894L9.382,4H7a1,1,0,0,0-.447.105l-2,1a1,1,0,0,0-.26.188l-2,2a1,1,0,0,0-.188,1.154l1,2a1,1,0,1,0,1.79-.894L4.217,8.2l.628-.627L6,9.3V15a1,1,0,0,0,2,0V9.3L14.2,7.98A1,1,0,0,0,13.8,6.02Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
