import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { useAllChampionData } from '@/hooks/useChampionData';
import { ChampionBox } from '@/components/ChampionBox';

export interface IChampionSelect {
  selectedChampions?: string[];
  disabledChampions?: string[];
  onSelect?: (selectedChampion: string) => void;
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
  selectedChampions = [],
  disabledChampions = [],
  onSelect,
  onSubmit,
}) => {
  const allChampions = useAllChampionData();
  const [currentSelection, setCurrentSelection] = React.useState<string[]>(selectedChampions);
  return (
    <StyledChampionSelect>
      <ChampionSelectionWrapper>
        {allChampions &&
          Object.keys(allChampions).map((key) => {
            const thisChampionId = allChampions[key].id;
            return (
              <ChampionBox
                key={key}
                championId={thisChampionId}
                isHighlighted={currentSelection.includes(thisChampionId)}
                isDisabled={disabledChampions.includes(thisChampionId)}
                onClick={() => {
                  if (onSelect) {
                    onSelect(thisChampionId);
                  }
                  setCurrentSelection(currentSelection.concat(thisChampionId).sort());
                }}
              />
            );
          })}
      </ChampionSelectionWrapper>
      {onSubmit && <Button onClick={() => onSubmit(currentSelection)}>Submit!</Button>}
    </StyledChampionSelect>
  );
};

export default ChampionSelect;
