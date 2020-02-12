import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import ChampionList from '@/components/ChampionList';
import usePrevious from '@/hooks/usePrevious';
import { ITierList } from '@/types/tierLists';
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
  const [tierListState, dispatch] = React.useReducer(TierListReducer, {
    tierListId,
    authorId,
    name,
    order,
    lists,
  });
  const prevTierListState = usePrevious(tierListState);
  React.useEffect(() => {
    if (prevTierListState) {
      updateTierList(
        prevTierListState.tierListId,
        prevTierListState.name,
        prevTierListState.order || 0,
        prevTierListState.lists || [],
      );
    }
    dispatch(setTierListInfo(tierListId, authorId, name, order, lists));
  }, [tierListId]);
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
      {tierListState &&
        tierListState.lists &&
        tierListState.lists.map((championList) => (
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
      <Button type="button" variant="destructive" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </Button>
    </>
  );
};

export default TierList;
