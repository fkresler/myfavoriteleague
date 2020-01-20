import React from 'react';
import styled from 'styled-components';
import { IChampionList } from '@/types/tierLists';
import ChampionEntry from '@/components/ChampionEntry';

const ChampionList = ({
  championListId,
  order,
  name,
  description,
  champions,
  updateChampionList,
  deleteChampionList,
}: IChampionList) => {
  return (
    <div>
      <div>{name}</div>
      {description && <div>{description}</div>}
      <div>
        {champions.map((champion) => (
          <ChampionEntry
            championEntryId={champion.championEntryId}
            championId={champion.championId}
            note={champion.note}
          />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
