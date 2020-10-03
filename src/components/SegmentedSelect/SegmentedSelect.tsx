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

const segmentedHeight = '3rem';

const SegmentedSelectWrapper = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 5px;
`;

const SegmentedSelectContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SegmentedChoice = styled.div<{ isActive: boolean }>`
  display: block;
  text-align: center;
  line-height: ${segmentedHeight};
  padding: 0 0.5rem;
  flex-grow: 1;
  flex-basis: 0;
  user-select: none;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.action.active : theme.colors.action.main)};
  color: ${({ theme }) => theme.colors.text.getTextColorByBackground(theme.colors.action.main)};
`;

export const SegmentedSelect: React.FC<ISegmentedSelect> = ({
  choices,
  initialSelectedId,
  selectedId,
  onSelect,
}) => {
  const renderedChoices = choices?.sort((a, b) => a.order - b.order);
  const defaultSelectedId = renderedChoices && renderedChoices.length > 0 ? renderedChoices[0].id : '';
  const [localSelectedId, setLocalSelectedId] = React.useState<string>(
    initialSelectedId || defaultSelectedId,
  );
  const renderedSelectedId = selectedId || localSelectedId || defaultSelectedId;

  const handleSelection = (id: string) => {
    if (id === renderedSelectedId) {
      return;
    }
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
      <SegmentedSelectContent data-testid="segmented-list">
        {renderedChoices.map((choice) => (
          <SegmentedChoice
            key={choice.id}
            data-testid={choice.id === renderedSelectedId ? 'choice-selected' : 'choice-unselected'}
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
