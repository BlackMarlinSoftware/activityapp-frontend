import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="11" cy="15" r="1"></circle> <circle cx="11" cy="2" r="2"></circle>
      <path d="M14.949,5.684a1,1,0,0,0-1.265-.632l-2.414.8L9.707,4.293A1,1,0,0,0,9,4H6a1,1,0,0,0-.447.105l-2,1A1,1,0,1,0,4.447,6.9L6.236,6H7.523L6.071,9.629A1,1,0,0,0,7,11h3v2h2V10a1,1,0,0,0-1-1H8.477l.888-2.221.928.928A1,1,0,0,0,11,8a.987.987,0,0,0,.316-.052l3-1A1,1,0,0,0,14.949,5.684Z"></path>
      <path d="M5,16A4,4,0,0,1,5,8v2a2,2,0,1,0,2,2H9A4,4,0,0,1,5,16Z" data-color="color-2"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
