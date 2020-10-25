import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface IModal {
  isOpen: boolean;
  title?: string;
  onRequestClose?: () => void;
}

const ModalBackground = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greyDark.default};
  z-index: 1000000;
  opacity: 0.5;
`;

const ModalboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000001;
  width: 40rem;
  max-width: 100%;
  height: 25rem;
  max-height: 100%;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 3px;
`;

const ModalboxHeadlineContainer = styled.div`
  flex: 0 0 auto;
  display: block;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  font-size: 150%;
  line-height: 150%;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borders.default};
`;

const ModalboxContentContainer = styled.div`
  flex: 1 1 100%;
  display: block;
  overflow: auto;
  padding: 1rem;
  overflow: auto;
`;

export const Modal: React.FC<IModal> = ({ isOpen, title, onRequestClose, children }) => {
  if (isOpen) {
    return createPortal(
      <>
        <ModalBackground isOpen={isOpen} onClick={() => onRequestClose && onRequestClose()} />
        <ModalboxContainer>
          {title && <ModalboxHeadlineContainer>{title}</ModalboxHeadlineContainer>}
          <ModalboxContentContainer>{children}</ModalboxContentContainer>
        </ModalboxContainer>
      </>,
      document.body,
    );
  }
  return null;
};

export default Modal;
