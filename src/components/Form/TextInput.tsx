import React from 'react';
import styled from 'styled-components';

export interface ITextInput {
  /** Unique identifier for this form field */
  id: string;
  /** className for more styling customization */
  className?: string;
  /** Label text to be used for the input */
  label?: string;
  /** Current value of the input field */
  value?: string;
  /** Placeholder string for the input field */
  placeholder?: string;
  /** Indicates the error style rendering */
  hasError?: boolean;
  /** Indicates the read-only style rendering and possibilities to use the field
   *  The field will be set automatically to read-only when a value is set without an onChange function
   */
  isReadOnly?: boolean;
  /** Indicates disabled style rendering and possibilities to use the field */
  isDisabled?: boolean;
  /** Indicates required style rendering */
  isRequired?: boolean;
  /** Sets the auto-focus flag when set */
  hasAutoFocus?: boolean;
  /** Indicates whether to render a fixed width or full width */
  isFullWidth?: boolean;
  /** Function that is called when the value of the input field changes
   *  If you do not provide an onChange function while providing a value the field will be read-only
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Function that is called whenever a key is pressed on the input field */
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  & input,
  & label {
    transition: all 0.2s;
  }
`;

const StyledInput = styled.input<{ hasError?: boolean; isFullWidth?: boolean }>`
  display: block;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.borders.error : theme.borders.default)};
  border-radius: 3px;

  &::placeholder {
    opacity: 0;
    transition: inherit;
    color: ${({ theme }) => theme.colors.greyNormal.default};
  }

  &:focus::placeholder {
    opacity: 1;
  }

  &:placeholder-shown + label {
    cursor: text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0.5rem, 1.5rem);
    color: ${({ theme }) => theme.colors.greyNormal.default};
    pointer-events: none;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.base.text};
  }
`;

export const TextInput: React.FC<ITextInput> = ({
  id,
  className,
  label,
  value,
  placeholder,
  hasError,
  isReadOnly,
  isDisabled,
  isRequired,
  hasAutoFocus,
  isFullWidth,
  onChange,
  onKeyPress,
}) => {
  const usedLabel = label || placeholder;
  const renderedLabel = `${usedLabel}${isRequired ? ' *' : ''}`;
  const renderedIsReadOnly = (!!value && !onChange) || isReadOnly;

  return (
    <InputWrapper>
      <StyledInput
        id={id}
        autoFocus={hasAutoFocus}
        className={className}
        value={value}
        placeholder={placeholder}
        hasError={hasError}
        readOnly={renderedIsReadOnly}
        disabled={isDisabled}
        isFullWidth={isFullWidth}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {label && <label htmlFor={id}>{renderedLabel}</label>}
    </InputWrapper>
  );
};

export default TextInput;
