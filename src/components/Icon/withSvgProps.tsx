interface Props {
  colour?: string;
  width: string;
  height: string;
}

const withSvgProps = (Component: React.FC) =>
  function SvgProps({ colour, width, height, ...rest }: Props): JSX.Element {
    return (
      <div style={{ display: 'flex', color: colour, width, height }}>
        <Component {...rest} />
      </div>
    );
  };

export default withSvgProps;
