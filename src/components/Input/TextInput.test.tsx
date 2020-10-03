import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders', () => {
    render(<TextInput />);
  });
});
