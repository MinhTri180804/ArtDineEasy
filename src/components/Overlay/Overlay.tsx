import React, { ReactNode, useRef } from 'react';
import './styles.scss';

interface IOverlayComponentProps {
  children?: JSX.Element | JSX.Element[] | ReactNode;
  open: boolean;
  alignContent?: 'center' | 'left' | 'right' | 'top' | 'bottom';
  borderRadius?: boolean;
  onClose: () => void;
}

const OverlayComponent = ({
  children,
  open,
  alignContent = 'center',
  onClose,
  borderRadius = false,
}: IOverlayComponentProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };
  return (
    <div
      className={`overlay ${open && 'open'} ${alignContent}`}
      onClick={handleClickOutside}
    >
      <div
        className={`overlay__content ${borderRadius && 'border-radius'}`}
        ref={overlayRef}
      >
        {children}
      </div>
    </div>
  );
};

export { OverlayComponent };
