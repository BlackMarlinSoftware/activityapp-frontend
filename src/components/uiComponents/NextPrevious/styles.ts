import styled from 'styled-components';
import { colors, shadows, spacing } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacing[2]};
`;

export const Pill = styled.div`
  display: flex;
  background-color: white;
  border-radius: ${spacing[10]};
  box-shadow: ${shadows.light};
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${spacing[5]};
  border-left: 1px solid ${colors.neutral[9]};
  border-right: 1px solid ${colors.neutral[9]};
`;

export const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing[3]} ${spacing[4]};
`;
