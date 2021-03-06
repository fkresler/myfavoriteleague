import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { FaRegTimesCircle } from 'react-icons/fa';

export interface IModal {
  /** Custom test id to query for the modalbox */
  customTestId?: string;
  /** Custom test id to query for the background */
  customBgId?: string;
  /** Custom test id to query for the close button */
  customCloseId?: string;
  /** Indicates whether a modalbox is rendered or not */
  isOpen: boolean;
  /** Optional title of the modalbox */
  title?: string;
  /** Optional fixed footer inside the modalbox */
  footer?: React.ReactNode;
  /** Indicates whether a close button should be rendered, defaults to true */
  showClose?: boolean;
  /** Function that is called when the modalbox is requesting to close itself */
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
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: 3px;

  @media (min-width: 768px) {
    width: 50vw;
    min-width: 40rem;
    max-width: 100%;
    height: 50vh;
    min-height: 25rem;
    max-height: 100%;
  }
`;

const ModalboxHeadlineContainer = styled.div`
  flex: 0 0 auto;
  display: block;
  width: 100%;
  overflow: hidden;
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

const ModalboxFooterContainer = styled.div`
  flex: 0 0 auto;
  display: block;
  width: 100%
  padding: 1rem;
`;

const ModalboxClose = styled.div`
  position: absolute;
  font-size: 2rem;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const Modal: React.FC<IModal> = ({
  customTestId,
  customBgId,
  customCloseId,
  isOpen,
  title,
  footer,
  showClose = true,
  onRequestClose,
  children,
}) => {
  if (isOpen) {
    return createPortal(
      <>
        <ModalBackground
          data-testid={customBgId || 'background'}
          isOpen={isOpen}
          onClick={onRequestClose}
        />
        <ModalboxContainer data-testid={customTestId || 'modalbox'}>
          {showClose && (
            <ModalboxClose data-testid={customCloseId || 'close'} onClick={onRequestClose}>
              <FaRegTimesCircle />
            </ModalboxClose>
          )}
          {title && <ModalboxHeadlineContainer>{title}</ModalboxHeadlineContainer>}
          <ModalboxContentContainer>{children}</ModalboxContentContainer>
          {footer && <ModalboxFooterContainer>{footer}</ModalboxFooterContainer>}
        </ModalboxContainer>
      </>,
      document.body,
    );
  }
  return null;
};

export default Modal;
