import React from 'react';
import styled from 'styled-components';
import ChampionList from '@/components/ChampionList';
import { ITierList, ITierListData } from '@/types/tierLists';
import TierListReducer from './TierListReducer';

const TierList: React.FC<ITierList> = ({
  tierListId,
  authorId,
  name,
  order = 0,
  lists = [],
  updateTierList,
  deleteTierList,
}) => {
  const tierListData: ITierListData = {
    tierListId,
    authorId,
    name,
    order,
    lists,
  };
  const [tierListState, dispatch] = React.useReducer(TierListReducer, tierListData);
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
      <button type="button" onClick={() => updateTierList(tierListId, name, order, lists)}>
        Save this list! (Call this on tear down and whenever tierListId changes)
      </button>
      <button type="button" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </button>
    </>
  );
};

export default TierList;
