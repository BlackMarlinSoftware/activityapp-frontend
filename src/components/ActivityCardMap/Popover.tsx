import React, { cloneElement, Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions';
import { currentFocusedActivityId } from '../../reactiveVars/map';

interface Props {
  render: (data: { close: () => void; labelId: string; descriptionId: string }) => React.ReactNode;
  placement?: Placement;
  children: JSX.Element;
  activityId: string;
  isOpenSetter: Dispatch<SetStateAction<boolean>>;
}

export const Popover = ({ children, render, placement, isOpenSetter, activityId }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    isOpenSetter(open);
    if (open) {
      currentFocusedActivityId(activityId);
    } else {
      currentFocusedActivityId('');
    }
  }, [open, isOpenSetter]);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ]);

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref: reference, ...children.props }))}
      {open && (
        <FloatingFocusManager context={context} modal={false} order={['reference', 'content']} returnFocus={false}>
          <div
            {...getFloatingProps({
              className: 'Popover',
              ref: floating,
              style: {
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              },
              'aria-labelledby': labelId,
              'aria-describedby': descriptionId,
            })}
          >
            {render({
              labelId,
              descriptionId,
              close: () => {
                setOpen(false);
                currentFocusedActivityId('');
              },
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
