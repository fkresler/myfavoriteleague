import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { uiRender as render } from '@/utils/testUtils';
import { Chip } from './Chip';

describe('Chip', () => {
  it('renders a chip with its contents by default', () => {
    render(<Chip value="Im a chip" />);
    expect(screen.getByText('Im a chip')).toBeTruthy();
  });
  it('renders a chip with its contents and a delete action', () => {
    const mockDelete = jest.fn();
    render(<Chip value="Im a chip" onDelete={mockDelete} />);
    expect(screen.getByTestId('chip-delete')).toBeTruthy();
    userEvent.click(screen.getByTestId('chip-delete'));
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
  it('does not render a delete action when the chip is disabled', () => {
    render(<Chip value="Im a chip" isDisabled onDelete={jest.fn()} />);
    expect(screen.queryByTestId('chip-delete')).toBeNull();
  });
});
