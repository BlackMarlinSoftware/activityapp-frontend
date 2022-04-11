import styled from 'styled-components';

const Yolo = styled.div`
  margin-top: 0px;
  margin-bottom: 50px;
  text-align: center;
  font-family: sans-serif;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2, -16px 16px #2196f3, -20px 20px #26c6da,
    -24px 24px #43a047, -28px 28px #eeff41, -32px 32px #f9a825, -36px 36px #ff5722;
`;

const Thing = () => {
  return <Yolo>Deploy preview</Yolo>;
};

export default Thing;
