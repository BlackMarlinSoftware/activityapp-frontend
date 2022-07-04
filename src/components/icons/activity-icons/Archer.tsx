import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <circle cx="6" cy="2" r="2"></circle>
      <path
        d="M12.433.1a1,1,0,0,0-.866,1.8A4.507,4.507,0,0,1,14,6a4.507,4.507,0,0,1-2.433,4.1A1,1,0,0,0,12,12a.985.985,0,0,0,.433-.1A6.513,6.513,0,0,0,16,6,6.513,6.513,0,0,0,12.433.1Z"
        data-color="color-2"
      ></path>
      <path d="M12,5H2A1,1,0,0,0,2,7H4v3.086L2.293,11.793a1,1,0,0,0-.222,1.078l1,2.5a1,1,0,1,0,1.858-.742l-.756-1.888L6,11l3.168,4.555a1,1,0,0,0,1.664-1.11L8,10.2V7h4a1,1,0,0,0,0-2Z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);
