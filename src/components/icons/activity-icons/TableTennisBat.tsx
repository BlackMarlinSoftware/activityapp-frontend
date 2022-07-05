import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle data-color="color-2" cx="14" cy="10" r="2"></circle>
      <path d="M10,10c0-2.2055664,1.7944336-4,4-4c0.4810791,0,0.9365234,0.098938,1.3641357,0.2553101 c0.3086548-1.668396-0.18396-3.2991943-1.3850098-4.5001831C11.9249878-0.2990112,8.62146-0.3259888,6.0090332,2.286438 C3.8722534,4.4232788,3.5030518,6.9487305,4.5079956,8.9246216l-4.2323608,3.4628296 c-0.3441162,0.2815552-0.369873,0.798584-0.055542,1.112915l2.0137939,2.0137939 c0.3143311,0.3143921,0.8314209,0.2885742,1.1129761-0.055481l3.4628296-4.2324219 c1.0641479,0.5412598,2.2875366,0.6807861,3.5238037,0.3635254C10.1210327,11.1018066,10,10.5653076,10,10z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
