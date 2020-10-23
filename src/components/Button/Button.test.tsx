import React from 'react';
import { render } from '@/utils/testUtils';
import { Button } from './Button';

describe('Button', () => {
  it('renders', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeTruthy();
  });
});
