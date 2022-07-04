interface Props {
  colour?: string;
}

const withSvgColour = (Component: React.FC) =>
  function SvgColour({ colour, ...rest }: Props): JSX.Element {
    return (
      <div style={{ display: 'flex', color: colour }}>
        <Component {...rest} />
      </div>
    );
  };

export default withSvgColour;
