import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M14.5,8.333a3.641,3.641,0,0,0-1-2.509l0,0L8.36.486a.516.516,0,0,0-.72,0L2.5,5.824a3.653,3.653,0,0,0,4.821,5.455,4.956,4.956,0,0,1-2.1,2.805A.5.5,0,0,0,5.5,15h5a.5.5,0,0,0,.277-.916,4.956,4.956,0,0,1-2.1-2.8A3.616,3.616,0,0,0,10.833,12,3.671,3.671,0,0,0,14.5,8.333Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
