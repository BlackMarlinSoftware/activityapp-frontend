import { useState, useEffect, useRef } from 'react';
import { ClampParagraph, ToggleExpanded } from './styles';
import debounce from 'lodash/debounce';

interface Props {
  text: string;
  lines: number;
}

const ReadMore = ({ text, lines }: Props): JSX.Element => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const checkIfClamped = () => {
      if (paragraphRef.current) {
        const { clientHeight, scrollHeight } = paragraphRef.current;
        setShowButton(clientHeight !== scrollHeight);
      }
    };

    checkIfClamped();

    const debouncedCheckIfClamped = debounce(checkIfClamped, 100);
    window.addEventListener('resize', debouncedCheckIfClamped);

    return () => {
      window.removeEventListener('resize', debouncedCheckIfClamped);
    };
  }, [paragraphRef]);

  return (
    <div>
      <ClampParagraph ref={paragraphRef} expanded={expanded} lines={lines}>
        <span>{text}</span>
      </ClampParagraph>

      {showButton && (
        <ToggleExpanded onClick={() => setExpanded(!expanded)}>
          <span>{expanded ? '- Show less' : '+ Read more'}</span>
        </ToggleExpanded>
      )}
    </div>
  );
};

export default ReadMore;
