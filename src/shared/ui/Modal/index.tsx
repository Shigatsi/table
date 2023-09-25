import React, { useState } from "react";
import { Portal } from "shared/ui";
import "./style.scss";

interface IModalProps {
  children: React.ReactNode;
  className?: string;
}
interface IModalHeaderProps {
  children?: React.ReactNode;
  className?: string;
}
interface IModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({children, className=""}:IModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Portal>
      <div className="modal">
        <div className="modal__content">{children}</div>
      </div>
    </Portal>
  );
};

Modal.Header = ({ children }: IModalHeaderProps) => {
  return (
    <div className="modal__header">
      <button>X</button>
      {children}
    </div>
  );
};

Modal.Body = ({ children, className = "" }: IModalBodyProps) => {
  <div className={`modal__body ${className}`}>{children}</div>;
};
