import React from 'react';
import styled from 'styled-components';

export interface ITextInput {
  /** className for more styling customization */
  className?: string;
  /** Label text to be used for the input */
  label?: string;
  /** Prefix node for the input field, e.g. an icon */
  prefix?: React.ReactNode;
  /** Suffix node for the input field, e.g. an icon */
  suffix?: React.ReactNode;
  /** Current value of the input field */
  value?: string;
  /** Placeholder string for the input field */
  placeholder?: string;
  /** Indicates the error style rendering */
  hasError?: boolean;
  /** Indicates the read-only style rendering and possibilities to use the field */
  isReadOnly?: boolean;
  /** Indicates disabled style rendering and possibilities to use the field */
  isDisabled?: boolean;
  /** Indicates required style rendering */
  isRequired?: boolean;
  /** Sets the auto-focus flag when set */
  hasAutoFocus?: boolean;
  /** Function that is called when the value of the input field changes */
  onChange?: (e: React.ChangeEvent) => void;
  /** Function that is called whenever a key is pressed on the input field */
  onKeyPress?: (e: React.KeyboardEvent) => void;
}

const StyledInput = styled.input<{ hasError?: boolean }>`
  display: block;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.getTextColorByBackground(theme.colors.background.main)};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error.main : theme.colors.border.main)};
  border-radius: 3px;
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
}) => {
  return (
    <>
      {label && <div>{label}</div>}
      <StyledInput
        className={className}
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default TextInput;
