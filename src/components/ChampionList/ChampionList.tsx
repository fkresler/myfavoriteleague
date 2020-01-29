import React from 'react';
import styled from 'styled-components';
import { IChampionList } from '@/types/tierLists';
import ChampionEntry from '@/components/ChampionEntry';

const StyledChampionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid blue;
  border-radius: 3px;

  & > * {
    margin: 1rem;
  }
`;

const ChampionList: React.FC<IChampionList> = ({
  championListId,
  name,
  description,
  entries,
  updateChampionList,
  deleteChampionList,
}) => {
  return (
    <div>
      <div>{name}</div>
      {description && <div>{description}</div>}
      <StyledChampionContainer>
        {entries.map((champion) => (
          <ChampionEntry
            championEntryId={champion.championEntryId}
            championId={champion.championId}
            note={champion.note}
            updateChampionEntry={() => { }}
            deleteChampionEntry={() => { }}
          />
        ))}
      </StyledChampionContainer>
    </div>
  );
};

export default ChampionList;
