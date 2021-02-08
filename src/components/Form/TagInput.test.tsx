import { render, screen } from '@/utils/testUtils';
import userEvent, { specialChars } from '@testing-library/user-event';
import React from 'react';
import { TagInput } from './TagInput';

describe('TagInput', () => {
  it('renders tags when provided with tags', () => {
    render(<TagInput id="test" tags={['Ahri', 'Akali', 'Aatrox']} />);
    expect(screen.getByText('Ahri')).toBeTruthy();
    expect(screen.getByText('Akali')).toBeTruthy();
    expect(screen.getByText('Aatrox')).toBeTruthy();
  });
  it('calls the onTagAdd function when pressing Enter while there is valid input', () => {
    const mockOnTagAdd = jest.fn();
    render(<TagInput id="test" tags={[]} onTagAdd={mockOnTagAdd} />);
    const input = screen.getByLabelText('Enter your tags');
    expect(input).toBeTruthy();
    userEvent.type(input, 'Malphite');
    userEvent.type(input, specialChars.enter);
    expect(mockOnTagAdd).toHaveBeenCalledTimes(1);
    expect(mockOnTagAdd).toHaveBeenCalledWith('Malphite');
  });
  it('does not call the onTagAdd function on pressing Enter while there is invalid input', () => {
    const mockOnTagAdd = jest.fn();
    render(<TagInput id="test" tags={[]} onTagAdd={mockOnTagAdd} />);
    const input = screen.getByLabelText('Enter your tags');
    expect(input).toBeTruthy();
    userEvent.type(input, specialChars.enter);
    expect(mockOnTagAdd).not.toHaveBeenCalled();
  });
});
