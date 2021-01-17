import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@/utils/testUtils';
import { Card } from './Card';

describe('Card', () => {
  it('renders a card with a headline and sub-headline and content', () => {
    render(
      <Card headline="Im headline" subHeadline="Im subheadline">
        And Im content
      </Card>,
    );
    expect(screen.getByText('Im headline')).toBeTruthy();
    expect(screen.getByText('Im subheadline')).toBeTruthy();
    expect(screen.getByText('And Im content')).toBeTruthy();
  });
  it('renders actions when provided one more more', () => {
    const testOnClick = jest.fn();
    const SomeAction = (
      <button type="button" onClick={testOnClick}>
        Action
      </button>
    );
    render(
      <Card headline="Im headline" action={SomeAction}>
        Im content
      </Card>,
    );
    expect(screen.getByText('Action')).toBeTruthy();
    userEvent.click(screen.getByText('Action'));
    expect(testOnClick).toHaveBeenCalled();
  });
});
