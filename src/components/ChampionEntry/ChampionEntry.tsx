import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { IChampionEntry } from '@/types/tierLists';
import ChampionBox from '@/components/ChampionBox';

const StyledChampionEntry = styled.div`
  display: inline-block;
  position: relative;

  span {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    max-width: 5rem;
    top: -50%;
    left: 0;
    z-index: 1;
    background-color: grey;
    padding: 0.5rem;
    text-align: center;
    transition: opacity 0.3s;
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ChampionEntry: React.FC<IChampionEntry> = ({
  championEntryId,
  championId,
  note,
  updateChampionEntry,
  deleteChampionEntry,
}: IChampionEntry) => {
  return (
    <StyledChampionEntry
      onContextMenu={(event) => {
        event.preventDefault();
        deleteChampionEntry(championEntryId);
      }}
    >
      <ChampionBox championId={championId} />
      {note && <span>{note}</span>}
    </StyledChampionEntry>
  );
};

export default ChampionEntry;
