import React from 'react';
import styled from 'styled-components';

export interface ISegmentedSelect {
  choices?: string[];
  currentlySelectedChoice?: string;
  onChoiceSelection?: (toBeSelectedChoice: string) => void;
}

const StyledSegmentedSelect = styled.div`
  display: flex;
  width: 60%;
  margin: 1rem auto;
  border-radius: 3px;
  overflow: hidden;
`;

const StyledSegmentedOption = styled.div<{ isActive: boolean }>`
  flex-grow: 1;
  flex-basis: 0;
  padding: 1rem;
  background-color: ${({ isActive }) => (isActive ? 'blue' : 'orange')};
  color: #fff;
  font-weight: bold;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-align: center;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  user-select: none;
`;

const SegmentedSelect: React.FC<ISegmentedSelect> = ({
  choices,
  currentlySelectedChoice,
  onChoiceSelection = () => {},
}) => {
  return (
    <StyledSegmentedSelect>
      {choices &&
        choices.map((choice) => (
          <StyledSegmentedOption
            key={choice}
            isActive={choice === currentlySelectedChoice}
            onClick={() => onChoiceSelection(choice)}
          >
            {choice}
          </StyledSegmentedOption>
        ))}
    </StyledSegmentedSelect>
  );
};

export default SegmentedSelect;
