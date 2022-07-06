import styled from 'styled-components';
import theme, {spacing} from '../../../styles/theme';

export const Button = styled.button.attrs({ type: 'button' })`
  display: flex;
  margin-right: ${spacing['3']};
  border: 0;
  padding: ${spacing['1']};
  border-radius: 100%;
  color: ${theme.colors.supporting.red['7']};
  
  svg {
    width: ${spacing['3']};
    height: ${spacing['3']};
  }
`;