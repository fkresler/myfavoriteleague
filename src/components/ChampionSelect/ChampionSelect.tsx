import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { useAllChampionData } from '@/hooks/useChampionData';
import { ChampionBox } from '@/components/ChampionBox';

export interface IChampionSelect {
  className?: string;
  testId?: string;
  initialSelection?: string[];
  disabledChampions?: string[];
  onSelectionChange?: (championSelection: string[]) => void;
  onSubmit?: (selectedChampions: string[]) => void;
}

const StyledChampionSelect = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.action.main};
`;

const ChampionSelectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > * {
    margin: 1rem;
  }
`;

export const ChampionSelect: React.FC<IChampionSelect> = ({
  className,
  testId,
  initialSelection = [],
  disabledChampions = [],
  onSelectionChange,
  onSubmit,
}) => {
  const allChampions = useAllChampionData();
  const [currentSelection, setCurrentSelection] = React.useState<string[]>(initialSelection);

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
      <ChampionSelectionWrapper>
        {allChampions &&
          Object.keys(allChampions).map((key) => {
            const thisChampionId = allChampions[key].id;
            const isChampionDisabled = disabledChampions.includes(thisChampionId);
            const isChampionHighlighted = currentSelection.includes(thisChampionId);
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
      </ChampionSelectionWrapper>
      {onSubmit && (
        <Button variant="success" onClick={() => onSubmit(currentSelection)}>
          These are my champions!
        </Button>
      )}
    </StyledChampionSelect>
  );
};

export default ChampionSelect;
