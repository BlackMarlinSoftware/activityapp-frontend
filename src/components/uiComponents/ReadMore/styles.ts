import styled from 'styled-components';

export const ClampParagraph = styled.p<{ expanded: boolean; lines: number }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lines }) => lines};
  -webkit-box-orient: vertical;
  ${({ expanded }) =>
    expanded
      ? `
    -webkit-line-clamp: initial;
    overflow: initial;
  `
      : ''}
`;

export const ToggleExpanded = styled.div`
  font-weight: 600;
  cursor: pointer;
`;
