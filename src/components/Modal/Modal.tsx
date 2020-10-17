import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface IModal {
  isOpen: boolean;
  size: 'small' | 'medium' | 'huge' | 'full';
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  onRequestClose?: () => void;
}

const ModalBackground = styled.div<{ isOpen: boolean }>`
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: ${({ theme }) => theme.colors.greyDark.default};
  position: fixed;
  transition: opacity 0.3s, z-index 0.3s;
  ${(isOpen) =>
    isOpen &&
    `
            visibility: visible;
            z-index: 1000000;
            opacity: 0.5;
        `};
`;

export const Modal: React.FC<IModal> = ({
  isOpen,
  size,
  title,
  footer,
  onRequestClose,
  children,
}) => {
  if (isOpen) {
    return createPortal(
      <ModalBackground isOpen={isOpen} onClick={() => onRequestClose && onRequestClose()}>
        <div>This will be Modal Content</div>
      </ModalBackground>,
      document.body,
    );
  }
  return null;
};

export default Modal;
