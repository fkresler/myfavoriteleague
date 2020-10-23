import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@/utils/testUtils';
import { Editor } from './Editor';

describe('Editor', () => {
  it('renders a value when provided with one', () => {
    render(<Editor value="Test it" />);
    expect(screen.getByDisplayValue('Test it')).toBeTruthy();
  });
  it('renders a placeholder initially when provided with one', () => {
    render(<Editor placeholder="Something is going on here" />);
    expect(screen.getByPlaceholderText('Something is going on here')).toBeTruthy();
  });
  it('renders the value when a value and a placeholder are provided', () => {
    render(<Editor value="Test it" placeholder="Im a placeholder" />);
    expect(screen.getByDisplayValue('Test it')).toBeTruthy();
  });
  it('does not render a placeholder when a value is provided', () => {
    render(<Editor value="Test" placeholder="Placeholder" />);
    expect(screen.getByDisplayValue('Test')).toBeTruthy();
    expect(screen.queryByPlaceholderText('Placeholder')).toBeNull();
  });
  it('renders the placeholder when the value is an empty string', () => {
    render(<Editor value="" placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText('Placeholder')).toBeTruthy();
  });
  it('calls the provided onChange function when entering letters', () => {
    const testOnChange = jest.fn();
    render(<Editor value="" placeholder="Placeholder" onChange={testOnChange} />);
    const editor = screen.getByPlaceholderText('Placeholder');
    expect(editor).toBeTruthy();
    userEvent.type(editor, 'I enter something');
    expect(screen.getByDisplayValue('I enter something')).toBeTruthy();
    expect(testOnChange).toHaveBeenCalled();
  });
});
