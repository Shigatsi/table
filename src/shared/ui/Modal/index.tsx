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
interface IModalProps {
  children: React.ReactNode;
  className?: string;
}

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Portal>
      <div className="modal">
        <div className="modal__content">
          <Header />
        </div>
      </div>
    </Portal>
  );
};

const Header = ({ children }: IModalHeaderProps) => {
  return <div className="modal__header">
    <button>X</button>
    {children}
    </div>;
};
