import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path
        data-color="color-2"
        d="M1.956,4.037A1.647,1.647,0,0,0,.012,5.618,2.156,2.156,0,0,0,1.544,7.963,1.647,1.647,0,0,0,3.488,6.382,2.156,2.156,0,0,0,1.956,4.037Z"
      ></path>
      <path
        data-color="color-2"
        d="M14.044,4.037a1.647,1.647,0,0,1,1.944,1.581,2.156,2.156,0,0,1-1.532,2.345,1.647,1.647,0,0,1-1.944-1.581A2.156,2.156,0,0,1,14.044,4.037Z"
      ></path>
      <path
        data-color="color-2"
        d="M5.456.037A1.647,1.647,0,0,0,3.512,1.618,2.156,2.156,0,0,0,5.044,3.963,1.647,1.647,0,0,0,6.988,2.382,2.156,2.156,0,0,0,5.456.037Z"
      ></path>
      <path
        data-color="color-2"
        d="M10.544.037a1.647,1.647,0,0,1,1.944,1.581,2.156,2.156,0,0,1-1.532,2.345A1.647,1.647,0,0,1,9.012,2.382,2.156,2.156,0,0,1,10.544.037Z"
      ></path>
      <path d="M8,6c-3,0-5.5,4-5.5,7a3,3,0,0,0,3,3C6.755,16,7,15,8,15s.843,1,2.5,1a3,3,0,0,0,3-3C13.5,10,11,6,8,6Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);