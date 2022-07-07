import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M4.322,8.923l-1.7,1.358a1,1,0,0,1-1.332-.074l-1-1a1,1,0,0,1-.1-1.3L4,2.675V1A1,1,0,0,1,5,0,11,11,0,0,1,16,11a17.3,17.3,0,0,1-.735,4.262A1,1,0,0,1,14.3,16H4a1,1,0,0,1-.97-1.243,7.148,7.148,0,0,1,2.686-3.988C7.2,9.422,8.5,8.5,8,6A3,3,0,0,1,5,9,3.03,3.03,0,0,1,4.322,8.923Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);