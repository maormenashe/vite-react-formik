import React from "react";
import ModalPortal from "./ModalPortal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <ModalPortal isOpen={isOpen}>
      <button onClick={onClose}>Close</button>
      {children}
    </ModalPortal>
  );
};

export default Modal;
