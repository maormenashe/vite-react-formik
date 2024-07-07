import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  isOpen: boolean;
}

const ModalPortal: React.FC<React.PropsWithChildren<ModalPortalProps>> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.body
  );
};

export default ModalPortal;
