import React from 'react';
import styled from 'styled-components';
import { IChampionList } from '@/types/tierLists';
import ChampionEntry from '@/components/ChampionEntry';

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
      <div>
        {entries.map((champion) => (
          <ChampionEntry
            championEntryId={champion.championEntryId}
            championId={champion.championId}
            note={champion.note}
            updateChampionEntry={() => { }}
            deleteChampionEntry={() => { }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChampionList;
