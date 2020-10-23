import React from 'react';
import { render, screen, fireEvent } from '@/utils/testUtils';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders', () => {
    render(<TextInput />);
  });
});
