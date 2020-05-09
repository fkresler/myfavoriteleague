import React from 'react';
import styled from 'styled-components';

export interface ISegmentedSelect {
  choices?: {
    id: string;
    name: string;
    order: number;
  }[];
  currentlySelectedChoice?: string;
  onChoiceSelection?: (toBeSelectedChoice: string) => void;
}

const StyledSegmentedSelect = styled.div`
  display: flex;
  border-radius: 3px;
  overflow: scroll;
`;

const StyledSegmentedOption = styled.div<{ isActive: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  padding: 1rem;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.mainColorDark : theme.colors.mainColorLighter};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.fontColorLight : theme.colors.fontColorDark};
  font-weight: bold;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-align: center;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  user-select: none;
`;

const SegmentedSelect: React.FC<ISegmentedSelect> = ({
  choices = [],
  currentlySelectedChoice,
  onChoiceSelection = () => {},
}) => {
  const sortedChoices = choices.sort((itemA, itemB) => itemA.order - itemB.order);
  return (
    <StyledSegmentedSelect>
      {sortedChoices &&
        sortedChoices.map((choice) => (
          <StyledSegmentedOption
            key={choice.id}
            isActive={choice.id === currentlySelectedChoice}
            onClick={() => onChoiceSelection(choice.id)}
          >
            {choice.name}
          </StyledSegmentedOption>
        ))}
    </StyledSegmentedSelect>
  );
};

export default SegmentedSelect;
