import React from 'react';
import styled from 'styled-components';

export interface SelectOption {
  /** Unique id of the option */
  id: string;
  /** Description of the option that will be displayed */
  description: string;
}

export interface SelectProps {
  /** ID of the selected option */
  selectedId?: string;
  /** Possible options to be selected from the select element */
  options: SelectOption[];
  /** Placeholder for the select element */
  placeholder?: string;
  /** Indicates whether the select should appear to be disabeld */
  isDisabled?: boolean;
  /** Indicates whether the select should appear in full width */
  isFullWidth?: boolean;
  /** Function to be called when the selected option is changed */
  onChange?: (id: string) => void;
}

const StyledSelect = styled.select<{ isFullWidth?: boolean }>`
  display: block;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  padding: 0.25rem;
  line-height: 150%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.base.default};
  color: ${({ theme }) => theme.colors.base.text};
`;

export const Select: React.FC<SelectProps> = ({
  selectedId,
  options,
  placeholder,
  isDisabled,
  isFullWidth,
  onChange,
}) => {
  const isSelectedValid = !!(selectedId || options.find((option) => option.id === selectedId));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange && !isDisabled) {
      onChange(e.target.value);
    }
  };
  return (
    <StyledSelect
      data-testid="select"
      disabled={isDisabled}
      onChange={handleChange}
      isFullWidth={isFullWidth}
      value={isSelectedValid ? selectedId : 'placeholder'}
    >
      {placeholder && (
        <option data-testid="select-placeholder" value="placeholder" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option data-testid={option.id} key={option.id} value={option.id}>
          {option.description}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
