import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle data-color="color-2" cx="14" cy="10.2712479" r="2"></circle>
      <path d="M10,10.2714844c0-2.2055664,1.7939453-4,4-4c0.5491333,0,1.0724487,0.1117554,1.5491943,0.3128052 c0.7752075-1.9762573,0.5411987-4.0474854-0.7728271-5.361145c-0.9736328-0.9746094-2.3642578-1.387207-3.9287109-1.1645508 C9.3994141,0.2675781,7.9716797,1.0126953,6.828125,2.1567383C5.6835938,3.300293,4.9384766,4.7280273,4.7304688,6.1767578 C4.5613403,7.3500366,4.7545166,8.4307251,5.2764282,9.3095093l-1.057312,1.057312 c-0.3699951-0.1721191-0.8199463-0.1136475-1.1253662,0.1917725L0.2929688,13.359375 c-0.390625,0.390625-0.390625,1.0234375,0,1.4140625l0.9335938,0.9335938C1.421875,15.9023438,1.6777344,16,1.9335938,16 s0.5117188-0.0976562,0.7070312-0.2929688L5.4414062,12.90625c0.3054199-0.3054199,0.3638916-0.7553711,0.1917725-1.1253662 l1.0690308-1.0690308c0.6772461,0.3978271,1.4686279,0.6152954,2.3231812,0.6152954 c0.3567505,0,0.7247925-0.0494995,1.0960693-0.1218872C10.0488281,10.9042358,10,10.5944824,10,10.2714844z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);