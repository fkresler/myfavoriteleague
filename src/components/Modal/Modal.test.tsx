import React from 'react';
import { render, screen } from '@/utils/testUtils';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders nothing when the modal is closed', () => {
    render(
      <Modal customTestId="modalbox" isOpen={false} title="Modalbox">
        Modalbox content
      </Modal>,
    );
    expect(screen.queryByTestId('modalbox')).toBeNull();
    expect(screen.queryByText('Modalbox')).toBeNull();
    expect(screen.queryByText('Modalbox content')).toBeNull();
  });
  it('renders a modalbox when it is open', () => {
    render(
      <Modal customTestId="modalbox" isOpen title="Modalbox">
        Modalbox content
      </Modal>,
    );
    expect(screen.getByTestId('modalbox')).toBeTruthy();
    expect(screen.getByText('Modalbox')).toBeTruthy();
    expect(screen.getByText('Modalbox content')).toBeTruthy();
  });
  it('calls the provided onRequestClose when clicking outside of the modalbox', () => {
    const testOnRequestClose = jest.fn();
    render(
      <Modal customBgId="background" isOpen title="Modalbox" onRequestClose={testOnRequestClose}>
        Modalbox content
      </Modal>,
    );
    userEvent.click(screen.getByTestId('background'));
    expect(testOnRequestClose).toHaveBeenCalled();
  });
  it('does renders a close button by default', () => {
    render(
      <Modal customCloseId="close" isOpen title="Modalbox">
        Modalbox content
      </Modal>,
    );
    expect(screen.getByTestId('close')).toBeTruthy();
  });
  it('calls the provided onRequestClose when clicking the close button', () => {
    const testOnRequestClose = jest.fn();
    render(
      <Modal
        customCloseId="close"
        isOpen
        title="Modalbox"
        showClose
        onRequestClose={testOnRequestClose}
      >
        Modalbox content
      </Modal>,
    );
    expect(screen.getByTestId('close')).toBeTruthy();
    userEvent.click(screen.getByTestId('close'));
    expect(testOnRequestClose).toHaveBeenCalled();
  });
  it('renders a footer when provided one', () => {
    render(<Modal isOpen title="Modalbox" footer={<div>This is a modal footer</div>} showClose />);
    expect(screen.getByText('This is a modal footer')).toBeTruthy();
  });
});
