import styled from 'styled-components';
import theme, { spacing } from '../../styles/theme';

export const imageContainerWidth = '300px';
export const imageContainerHeight = '170px';
export const cardBorderRadius = spacing[3];

export const ActivityContainer = styled.div`
  cursor: pointer;
`;

export const PopoverCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${cardBorderRadius};
  width: 300px;
  height: 250px;
  background-color: white;
  margin-bottom: ${spacing[3]};
`;

export const ImageContainer = styled.div`
  width: ${imageContainerWidth};
  height: ${imageContainerHeight};
  max-height: 150px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing[3]};
  margin-top: ${spacing[4]};
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export const ActivityTitle = styled.div`
  p {
    font-weight: 700;
    margin-bottom: 0px;
  }
`;
export const ActivityDescription = styled.div`
  p {
    font-weight: normal;
    font-size: 0.75rem;
    color: ${theme.colors.supporting.grey[5]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ActivityOperator = styled.div`
  p {
    font-weight: 700;
    font-size: 0.75rem;
    color: ${theme.colors.supporting.grey[5]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    font-weight: normal;
    font-size: 0.75rem;
    color: ${theme.colors.supporting.grey[5]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Pin = styled.div<{ open: boolean }>`
  width: ${(props: any) => (props.open ? '35px' : '30px')};
  height: ${(props: any) => (props.open ? '35px' : '30px')};
  border-radius: 50%;
  background-color: ${(props: any) => (props.open ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 3px 6px 11px -6px rgba(0, 0, 0, 0.75);

  :hover {
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out;
  }
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 11px;
  right: 14px;
  z-index: 1;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 14px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;
