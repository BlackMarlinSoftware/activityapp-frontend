import styled from 'styled-components';
import {spacing} from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: calc(100vh - ${spacing['8']});
`;

export const List = styled.div`
  width: 50%;
  background-color: white;
  max-height: 100%;
  overflow: auto;
`;

export const ActivityContainer = styled.div`
  background-color: white;
  width: 100%;
  max-height: 100%;
`;