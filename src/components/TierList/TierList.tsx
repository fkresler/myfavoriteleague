import React from 'react';
import styled from 'styled-components';
import ChampionList from '@/components/ChampionList';
import { ITierList, ITierListData } from '@/types/tierLists';
import TierListReducer from './TierListReducer';
import {
  setTierListInfo,
  updateChampionListInfo,
  deleteChampionList,
  addChampionEntry,
  updateChampionEntry,
  deleteChampionEntry,
} from './TierListActions';

const TierList: React.FC<ITierList> = ({
  tierListId,
  authorId,
  name,
  order = 0,
  lists = [],
  updateTierList,
  deleteTierList,
}) => {
  const initialTierListData: ITierListData = {
    tierListId,
    authorId,
    name,
    order,
    lists,
  };
  const [tierListState, dispatch] = React.useReducer(TierListReducer, initialTierListData);
  React.useEffect(() => {
    dispatch(setTierListInfo(tierListId, authorId, name, order, lists));
  }, [tierListId]);
  const {
    tierListId: currentTierListId,
    name: currentTierListName,
    order: currentTierListOrder = 0,
    lists: currentTierListLists = [],
  } = tierListState;
  const doUpdateChampionList = (
    listId: string,
    listName: string,
    listDescription: string,
    listOrder: number,
  ) => {
    dispatch(updateChampionListInfo(listId, listName, listDescription, listOrder));
  };
  const doDeleteChampionList = (listId: string) => {
    dispatch(deleteChampionList(listId));
  };
  const doAddChampionEntry = (listId: string, championId: string, note: string) => {
    dispatch(addChampionEntry(listId, championId, note));
  };
  const doUpdateChampionEntry = (listId: string, entryId: string, note: string) => {
    dispatch(updateChampionEntry(listId, entryId, note));
  };
  const doDeleteChampionEntry = (listId: string, entryId: string) => {
    dispatch(deleteChampionEntry(listId, entryId));
  };
  return (
    <>
      {currentTierListLists &&
        currentTierListLists.map((championList) => (
          <ChampionList
            championListId={championList.championListId}
            name={championList.name}
            description={championList.description}
            entries={championList.entries}
            updateChampionList={doUpdateChampionList}
            deleteChampionList={doDeleteChampionList}
            addChampionEntry={doAddChampionEntry}
            updateChampionEntry={doUpdateChampionEntry}
            deleteChampionEntry={doDeleteChampionEntry}
          />
        ))}
      <button
        type="button"
        onClick={() =>
          updateTierList(
            currentTierListId,
            currentTierListName,
            currentTierListOrder,
            currentTierListLists,
          )
        }
      >
        Save this list!
      </button>
      <button type="button" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </button>
    </>
  );
};

export default TierList;
