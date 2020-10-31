import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export interface IChip {
  value: string;
  onDelete?: () => void;
}

const ChipWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.brand.default};
  color: ${({ theme }) => theme.colors.brand.text};
`;

const DeleteAction = styled(FaPlus)`
  margin: 0 1rem;
  cursor: pointer;
  transform: rotate(45deg);
`;

export const Chip: React.FC<IChip> = ({ value, onDelete }) => {
  return (
    <ChipWrapper>
      {value}
      {onDelete && <DeleteAction onClick={onDelete} />}
    </ChipWrapper>
  );
};

export default Chip;
