import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@/utils/testUtils';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders a value when provided with one', () => {
    render(<TextInput id="test" value="Test" />);
    expect(screen.getByDisplayValue('Test')).toBeTruthy();
  });
  it('renders a label when provided with one throughout the editing process', () => {
    render(<TextInput id="test" label="1 Label" placeholder="Placeholder" />);
    const input = screen.getByLabelText('1 Label');
    expect(input).toBeTruthy();
    userEvent.click(input);
    expect(screen.getByText('1 Label')).toBeTruthy();
    userEvent.type(input, 'Some value');
    expect(screen.getByDisplayValue('Some value')).toBeTruthy();
    expect(screen.getByText('1 Label')).toBeTruthy();
  });
  it('renders a placeholder initially when provided with one', () => {
    render(<TextInput id="test" placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText('Placeholder')).toBeTruthy();
  });
  it('renders the value when a value and a placeholder are provided', () => {
    render(<TextInput id="test" placeholder="Placeholder" value="Something" />);
    expect(screen.getByDisplayValue('Something')).toBeTruthy();
  });
  it('does not render a placeholder when a value is provided', () => {
    render(<TextInput id="test" placeholder="Placeholder" value="Test" />);
    expect(screen.getByDisplayValue('Test')).toBeTruthy();
    expect(screen.queryByPlaceholderText('Placeholder')).toBeNull();
  });
  it('renders the placeholder when the value is an empty string', () => {
    render(<TextInput id="test" placeholder="Placeholder" value="" />);
    expect(screen.getByPlaceholderText('Placeholder')).toBeTruthy();
  });
  it('calls the provided onChange function when entering letters', () => {
    const testOnChange = jest.fn();
    render(<TextInput id="test" placeholder="Placeholder" onChange={testOnChange} />);
    const input = screen.getByPlaceholderText('Placeholder');
    expect(input).toBeTruthy();
    userEvent.type(input, 'I entered this');
    expect(screen.getByDisplayValue('I entered this')).toBeTruthy();
    expect(testOnChange).toHaveBeenCalled();
  });
  it('calls the provided onKeyPress function when entering letters', () => {
    const testOnKeyPress = jest.fn();
    render(<TextInput id="test" placeholder="Placeholder" onKeyPress={testOnKeyPress} />);
    const input = screen.getByPlaceholderText('Placeholder');
    expect(input).toBeTruthy();
    userEvent.type(input, 'I entered this');
    expect(screen.getByDisplayValue('I entered this')).toBeTruthy();
    expect(testOnKeyPress).toHaveBeenCalled();
  });
});
