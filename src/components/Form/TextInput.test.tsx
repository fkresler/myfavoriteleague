import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@/utils/testUtils';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders a value when provided with one', () => {
    render(<TextInput id="test" value="Test" />);
    expect(screen.getByDisplayValue('Test')).toBeTruthy();
  });
  it('renders a label initially when provided with one', () => {
    render(<TextInput id="test" label="1 Label" placeholder="Placeholder" />);
    expect(screen.getByText('1 Label')).toBeTruthy();
  });
  it('renders a label while containing a value when provided with one', () => {
    render(<TextInput id="test" label="1 Label" value="Something" />);
    expect(screen.getByDisplayValue('Something')).toBeTruthy();
    expect(screen.getByText('1 Label')).toBeTruthy();
  });
  it('renders a placeholder when provided with one', () => {
    render(<TextInput id="test" placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText('Placeholder')).toBeTruthy();
  });
  it('calls the provided onChange function when entering letters', () => {
    const testOnChange = jest.fn();
    render(<TextInput id="test" placeholder="Placeholder" onChange={testOnChange} />);
    const input = screen.getByPlaceholderText('Placeholder');
    userEvent.type(input, 'I entered this');
    expect(testOnChange).toHaveBeenCalled();
  });
  it('calls the provided onKeyPress function when entering letters', () => {
    const testOnKeyPress = jest.fn();
    render(<TextInput id="test" placeholder="Placeholder" onKeyPress={testOnKeyPress} />);
    const input = screen.getByPlaceholderText('Placeholder');
    expect(input).toBeTruthy();
    userEvent.type(input, 'I entered this');
    expect(testOnKeyPress).toHaveBeenCalled();
  });
});
