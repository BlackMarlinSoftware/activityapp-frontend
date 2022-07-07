import withSvgColour from '../withSvgColour';

const Icon = (): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
    <g fill="currentColor">
      <path d="M12.1434374,9.788619L14,9.8686523l0.0000029,1.4842005 c0.0000029,1.3076954-0.9386101,2.5016651-2.2396049,2.6338787C10.2650709,14.1386938,9,12.9642572,9,11.5V5.8157349 c1.3364697-0.4765081,2.2452974-1.8606651,1.9411392-3.4162519C10.7113237,1.2241198,9.7430687,0.2681797,8.5651293,0.051954 C6.6635041-0.2971137,5,1.1607076,5,3c0,1.3019409,0.838501,2.4015503,2,2.8156738l0.0000043,5.5371799 c0.0000014,1.3076954-0.938612,2.5016642-2.2396064,2.6338778C3.2650704,14.1386938,2,12.9642572,2,11.5V9.8686523 L3.8565626,9.788619c0.4832039-0.0208302,0.6582422-0.6472654,0.2558246-0.915556L0,6.1313477l-0.0000006,5.1645794 c-0.0000003,2.3266487,1.6773162,4.4148579,3.9893498,4.6752348C5.618382,16.1546192,7.0770874,15.4471254,8,14.2935181 c0.9229126,1.1536074,2.3816185,1.8611012,4.0106506,1.6776438C14.3226843,15.7107849,16,13.6225758,16,11.295927V6.1313477 l-4.1123877,2.7417154C11.4851952,9.1413536,11.6602335,9.7677889,12.1434374,9.788619z M8,2c0.5517578,0,1,0.4487305,1,1 S8.5517578,4,8,4S7,3.5512695,7,3S7.4482422,2,8,2z"></path>
    </g>
  </svg>
);

export default withSvgColour(Icon);