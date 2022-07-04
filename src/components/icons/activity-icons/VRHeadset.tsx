import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15,4H13.65A5.99,5.99,0,0,0,2.35,4H1A1,1,0,0,0,0,5v6a1,1,0,0,0,1,1H2.812C3.851,14.387,5.785,16,8,16s4.149-1.613,5.188-4H15a1,1,0,0,0,1-1V5A1,1,0,0,0,15,4ZM8,2a3.987,3.987,0,0,1,3.444,2H4.556A3.987,3.987,0,0,1,8,2ZM8,14a3.621,3.621,0,0,1-2.946-2h5.892A3.621,3.621,0,0,1,8,14ZM2,8V6H14V8"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
