import React from 'react';
import { screen, render } from '@/utils/testUtils';
import { Notification } from './Notification';

describe('Notification', () => {
  it('renders notification content', () => {
    render(<Notification>This is notification content</Notification>);
    expect(screen.getByText('This is notification content')).toBeTruthy();
  });
});
