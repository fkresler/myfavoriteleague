import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, uiRender as render } from '@/utils/testUtils';
import { Editor } from './Editor';

describe('Editor', () => {
  it('renders a value when provided with one', () => {
    render(<Editor value="Test it" />);
    expect(screen.getByDisplayValue('Test it')).toBeTruthy();
  });
  it('renders a placeholder when provided with one', () => {
    render(<Editor placeholder="Something is going on here" />);
    expect(screen.getByPlaceholderText('Something is going on here')).toBeTruthy();
  });
  it('calls the provided onChange function when entering letters', () => {
    const testOnChange = jest.fn();
    render(<Editor value="" placeholder="Placeholder" onChange={testOnChange} />);
    const editor = screen.getByPlaceholderText('Placeholder');
    expect(editor).toBeTruthy();
    userEvent.type(editor, 'I enter something');
    expect(testOnChange).toHaveBeenCalled();
  });
});
