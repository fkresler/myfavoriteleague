import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, uiRender as render } from '@/utils/testUtils';
import { Button } from './Button';

describe('Button', () => {
  it('renders the content of the button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeTruthy();
  });
  it('calls the onClick function on click', () => {
    const testOnClick = jest.fn();
    render(<Button onClick={testOnClick}>Test</Button>);
    userEvent.click(screen.getByText('Test'));
    expect(testOnClick).toHaveBeenCalled();
  });
});
