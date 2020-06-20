import React from 'react';
import styled from 'styled-components';

export interface IModal {
  isOpen: boolean;
  size: 'small' | 'medium' | 'huge' | 'full';
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  onOpen?: () => void;
  onRequestClose?: () => void;
}

export const Modal: React.FC<IModal> = ({
  isOpen,
  size,
  title,
  footer,
  onOpen,
  onRequestClose,
  children,
}) => {
  return <div>{children}</div>;
};

export default Modal;
