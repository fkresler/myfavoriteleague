import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'react-rainbow-components';
import { useAllChampionData } from '@/hooks/useChampionData';
import { ChampionBox } from '@/components/ChampionBox';

export interface IChampionSelect {
  className?: string;
  testId?: string;
  initialSelection?: string[];
  disabledChampions?: string[];
  excludedChampions?: string[];
  showFilter?: boolean;
  onSelectionChange?: (championSelection: string[]) => void;
  onSubmit?: (selectedChampions: string[]) => void;
}

const StyledChampionSelect = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const FilterWrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: center;
`;

const ChampionSelectWrapper = styled.div`
  flex: 2 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  & > * {
    margin: 1rem;
  }
`;

const ActionButtonWrapper = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem;
`;

export const ChampionSelect: React.FC<IChampionSelect> = ({
  className,
  testId,
  initialSelection = [],
  disabledChampions = [],
  excludedChampions = [],
  showFilter,
  onSelectionChange,
  onSubmit,
}) => {
  const allChampions = useAllChampionData() || {};
  const [currentSelection, setCurrentSelection] = React.useState<string[]>(initialSelection);
  const [currentFilter, setCurrentFilter] = React.useState<string>('');

  const filterRegExp = new RegExp(currentFilter, 'i');
  const filteredChampions = Object.keys(allChampions).filter((key) => {
    return allChampions[key].name.search(filterRegExp) > -1;
  });

  const handleSelect = (championId: string) => {
    let newSelection: string[];
    if (currentSelection.includes(championId)) {
      newSelection = currentSelection.filter((selectedChampion) => selectedChampion !== championId);
      setCurrentSelection(newSelection);
    } else {
      newSelection = currentSelection.concat(championId);
      setCurrentSelection(newSelection);
    }
    return onSelectionChange && onSelectionChange(newSelection);
  };

  return (
    <StyledChampionSelect className={className} data-testid={testId || 'champion-select'}>
      {showFilter && (
        <FilterWrapper>
          <Input
            label="Filter"
            hideLabel
            placeholder="Search champions ..."
            value={currentFilter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentFilter(e.target.value)}
          />
        </FilterWrapper>
      )}
      <ChampionSelectWrapper>
        {filteredChampions.map((key) => {
          const thisChampionId = allChampions[key].id;
          const isChampionDisabled = disabledChampions.includes(thisChampionId);
          const isChampionHighlighted = currentSelection.includes(thisChampionId);
          if (excludedChampions.includes(thisChampionId)) {
            return null;
          }
          return (
            <ChampionBox
              key={key}
              testId="champion-box"
              championId={thisChampionId}
              isHighlighted={isChampionHighlighted}
              isDisabled={isChampionDisabled}
              onClick={() => {
                if (!isChampionDisabled) {
                  handleSelect(thisChampionId);
                }
              }}
            />
          );
        })}
      </ChampionSelectWrapper>
      {onSubmit && (
        <ActionButtonWrapper>
          <Button variant="success" onClick={() => onSubmit(currentSelection)}>
            These are my champions!
          </Button>
        </ActionButtonWrapper>
      )}
    </StyledChampionSelect>
  );
};

export default ChampionSelect;
