import React from 'react';
import styled from 'styled-components';
import { IChampionEntry } from '@/types/tierLists';
import ChampionBox from '@/components/ChampionBox';

const ChampionEntry: React.FC<IChampionEntry> = ({
  championEntryId,
  championId,
  note,
  updateChampionEntry,
  deleteChampionEntry,
}: IChampionEntry) => {
  return (
    <div>
      <ChampionBox championId={championId} />
      <div>{note}</div>
    </div>
  );
};

export default ChampionEntry;
