import React from 'react';
import { uiRender as render } from '@/utils/testUtils';
import { Loader } from './Loader';

describe('Loader', () => {
  it('renders a Loader', () => {
    render(<Loader />);
  });
});
