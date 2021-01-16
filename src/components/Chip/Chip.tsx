import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export interface IChip {
  value: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onDelete?: () => void;
}

const ChipWrapper = styled.div<{ isDisabled?: boolean; isActive?: boolean }>`
  display: inline-flex;
  align-items: center;
  text-align: center;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.text};

  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${theme.colors.brand.default};
    color: ${theme.colors.brand.text};
  `}

  ${({ isDisabled, theme }) =>
    isDisabled &&
    `
    background-color: ${theme.colors.disabled.default};
    color: ${theme.colors.disabled.text};
  `}
`;

const DeleteAction = styled(FaPlus)`
  margin: 0 0.5rem;
  cursor: pointer;
  transform: rotate(45deg);
`;

export const Chip: React.FC<IChip> = ({ value, isActive, isDisabled, onDelete }) => {
  return (
    <ChipWrapper isActive={isActive} isDisabled={isDisabled}>
      {value}
      {onDelete && !isDisabled && <DeleteAction data-testid="chip-delete" onClick={onDelete} />}
    </ChipWrapper>
  );
};

export default Chip;
