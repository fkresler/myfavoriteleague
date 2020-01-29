import React from 'react';
import styled from 'styled-components';
import ChampionList from '@/components/ChampionList';
import { ITierList } from '@/types/tierLists';

const TierList: React.FC<ITierList> = ({
  tierListId,
  name,
  lists,
  updateTierList,
  deleteTierList,
}) => {
  return (
    <>
      {lists &&
        lists.map((championList) => (
          <ChampionList
            championListId={championList.championListId}
            name={championList.name}
            description={championList.description}
            entries={championList.entries}
            updateChampionList={() => {}}
            deleteChampionList={() => {}}
          />
        ))}
    </>
  );
};

export default TierList;
