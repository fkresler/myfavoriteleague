import React from 'react';
import styled from 'styled-components';

export interface ITextInput {
  className?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string;
  placeholder?: string;
  hasError?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  hasAutoFocus?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

const StyledInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const TextInput: React.FC<ITextInput> = ({
  className,
  label,
  prefix,
  suffix,
  value,
  placeholder,
  hasError,
  isReadOnly,
  isDisabled,
  onChange,
  onKeyPress,
}) => {};

export default TextInput;
