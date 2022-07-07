import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M15.2317228,11.4823895c-0.4965582-0.3795109-1.1267939-0.5037327-1.7299681-0.3442984l-4.2672119,0.9954004 l-5.53127-9.8330421C3.1695895,1.3518282,1.9719335,1.017285,1.0228978,1.550231 C0.0751893,2.0830224-0.262169,3.2833028,0.2746359,4.2338667l6.2687721,11.0876436C6.7794609,15.7401457,7.2248316,16,7.7057409,16 H14.68365c0.7365246,0,1.3354597-0.5989351,1.3354597-1.3354597v-1.5900974 C16.0191097,12.4448595,15.7321949,11.8645077,15.2317228,11.4823895z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);