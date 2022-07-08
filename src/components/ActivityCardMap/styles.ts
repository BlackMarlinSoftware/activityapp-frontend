import styled from 'styled-components';
import theme, { spacing } from '../../styles/theme';

export const ActivityContainer = styled.div`
  width: ${spacing['11']};
  max-height: 66px;
  background-color: white;
  border-color: black;
  border-width: 3px;
  border-radius: ${spacing['4']};
  padding: ${spacing['2']};
  margin-bottom: ${spacing['4']};
  display: flex;
  flex-direction: row;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    top: 72px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    transform: rotate(225deg);
    border-top-color: white;
    border-bottom: 0;
    border-left: 0;
    margin-left: -10px;
    margin-bottom: -20px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.2;
`;

export const ContentContainer = styled.div`
  flex: 2;
  padding-left: ${spacing['4']};
  padding-bottom: ${spacing['2']};

  h5,
  h6 {
    margin: 0;
  }

  h6 {
    color: ${theme.colors.neutral['6']};
    display: inline-block;
    align-self: flex-end;
  }

  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 10pt;
    line-height: 14pt;
    margin: 0;
  }
`;
