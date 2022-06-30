import styled from 'styled-components';
import theme, { spacing } from '../../styles/theme';

export const ActivityContainer = styled.div`
  background-color: white;
  border-radius: ${spacing['4']};
  padding: ${spacing['2']};
  margin-bottom: ${spacing['4']};
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  flex: 1.2;
`;

export const ContentContainer = styled.div`
  flex: 2;
  padding-left: ${spacing['4']};
  padding-top: ${spacing['2']};
  padding-bottom: ${spacing['2']};
  
  h5, h6 {
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

export const Image = styled.img`
  border-radius: ${spacing['4']};
  width: 100%;
  height: ${spacing['10']};
  object-fit: fill;
  vertical-align: middle;
`;
