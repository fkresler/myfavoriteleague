import React from 'react';
import { screen, render } from '@/utils/testUtils';
import { Editor } from './Editor';

describe('Editor', () => {
  it('renders a value when provided with one', () => {
    render(<Editor value="Test it" />);
    expect(screen.getByText('Test it')).toBeTruthy();
  });
  it('renders with a placeholder initially when provided with one', () => {
    render(<Editor placeholder="Something is going on here" />);
    expect(screen.getByText('Something is going on here')).toBeTruthy();
  });
  it('renders a value when a value and a placeholder are provided', () => {
    render(<Editor value="Test it" placeholder="Im a placeholder" />);
    expect(screen.getByText('Test it')).toBeTruthy();
  });
  it('renders a placeholder when the value is an empty string', () => {
    render(<Editor value="" placeholder="Placeholder" />);
    expect(screen.getByText('Placeholder')).toBeTruthy();
  });
  it('calls the provided onChange function when entering letters', () => {
    const testOnChange = jest.fn();
    render(<Editor value="" placeholder="Placeholder" onChange={testOnChange} />);
    const editor = screen.getByPlaceholderText('Placeholder');
  });
});
