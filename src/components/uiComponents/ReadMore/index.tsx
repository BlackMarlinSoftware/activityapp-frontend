import { useState } from 'react';
import { ClampParagraph, ToggleExpanded } from './styles';

interface Props {
  text: string;
  lines: number;
}

const ReadMore = ({ text, lines }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <ClampParagraph expanded={expanded} lines={lines}>
        <span>{text}</span>
      </ClampParagraph>
      <ToggleExpanded onClick={() => setExpanded(!expanded)}>
        <span>{expanded ? '- Show less' : '+ Read more'}</span>
      </ToggleExpanded>
    </div>
  );
};

export default ReadMore;
