import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M13.5,10.5a3.929,3.929,0,0,1-1.5-.3,3.974,3.974,0,0,1-3.5-.241,3.993,3.993,0,0,1-4,0,3.954,3.954,0,0,1-2,.537c-.05,0-.1-.013-.145-.015l.522,3.656a1,1,0,0,0,.99.859h8.266a1,1,0,0,0,.99-.859l.522-3.656C13.6,10.487,13.55,10.5,13.5,10.5Z"></path>
      <path
        d="M13.757,4.026a6.989,6.989,0,0,0-11.514,0A2.493,2.493,0,1,0,4.5,7.986a2.479,2.479,0,0,0,4,0,2.47,2.47,0,0,0,3.5.5,2.492,2.492,0,1,0,1.757-4.463Z"
        data-color="color-2"
      ></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
