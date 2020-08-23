import React from 'react';
import styled from 'styled-components';

export interface ISegmentedSelect {
  choices?: {
    id: string;
    name: string;
    order: number;
  }[];
  initialSelectedId?: string;
  selectedId?: string;
  onSelect?: (selectedId: string) => void;
}

const SegmentedSelectWrapper = styled.div`
  display: block;
  height: 3rem;
  overflow: hidden;
  border-radius: 5px;
`;

const SegmentedSelectContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: -50px;
  padding-bottom: 50px;
`;

const SegmentedChoice = styled.div<{ isActive: boolean }>`
  display: block;
  text-align: center;
  padding: 1rem;
  flex-grow: 1;
  flex-basis: 0;
  user-select: none;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.action.active : theme.colors.action.main};
  color: ${({ theme }) => theme.colors.text.getTextColorByBackground(theme.colors.action.main)};
`;

export const SegmentedSelect: React.FC<ISegmentedSelect> = ({
  choices,
  initialSelectedId,
  selectedId,
  onSelect,
}) => {
  const renderedChoices = choices?.sort((a, b) => a.order - b.order);
  const defaultSelectedId =
    renderedChoices && renderedChoices.length > 0 ? renderedChoices[0].id : '';
  const [localSelectedId, setLocalSelectedId] = React.useState<string>(initialSelectedId || '');
  const renderedSelectedId = selectedId || localSelectedId || defaultSelectedId;

  const handleSelection = (id: string) => {
    setLocalSelectedId(id);
    if (onSelect) {
      onSelect(id);
    }
  };

  if (!renderedChoices) {
    return <></>;
  }

  return (
    <SegmentedSelectWrapper>
      <SegmentedSelectContent>
        {renderedChoices.map((choice) => (
          <SegmentedChoice
            key={choice.id}
            isActive={choice.id === renderedSelectedId}
            onClick={() => handleSelection(choice.id)}
          >
            {choice.name}
          </SegmentedChoice>
        ))}
      </SegmentedSelectContent>
    </SegmentedSelectWrapper>
  );
};

export default SegmentedSelect;
