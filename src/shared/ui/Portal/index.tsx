import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
  wrappedId?: string;
}

export const Portal = ({ children, wrappedId = "root" }: IPortalProps) => {
  const [mount, setMount] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMount(true);
    containerRef.current = document.querySelector(`#${wrappedId}`);
    return () => setMount(false);
  }, []);

  return mount && !!containerRef.current
    ? createPortal(children, containerRef.current)
    : null;
};
