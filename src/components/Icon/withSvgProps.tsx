interface Props {
  colour?: string;
  width: string;
  height: string;
}

const withSvgProps = (Component: React.FC) =>
  function SvgProps({ colour, width, height, ...rest }: Props): JSX.Element {
    return (
      <div
        style={{
          display: 'grid' /* Safari-compatible fix */,
          color: colour,
          minWidth: width,
          minHeight: height,
          maxWidth: width,
          maxHeight: height,
        }}
      >
        <Component {...rest} />
      </div>
    );
  };

export default withSvgProps;
