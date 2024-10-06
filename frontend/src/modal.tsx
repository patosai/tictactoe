import { useState, useEffect } from 'react';

import './modal.scss';
import { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<{
  visible?: boolean,
  onClose?: () => any,
}>;

export default function Modal({visible=true, onClose, children}: ModalProps) {
  const [shown, setShown] = useState(visible);

  useEffect(() => {
    setShown(visible);
  }, [visible]);

  function innerOnClose() {
    setShown(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className="modalWrapper" onClick={innerOnClose}>
      <div className="midScreenModal" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="close" onClick={innerOnClose}>Close</div>
      </div>
    </div>
  );
}