import React from 'react';
import TierListApp from './TierListApp';
import useAuthentication from '@/hooks/useAuthentication';
import useTierListFirestore from '@/hooks/useTierListFirestore';
import useUnload from '@/hooks/useUnload';
import TierListReducer from './TierListReducer';
import * as TierListAction from './TierListActions';
import { ITierListMethods } from '@/types/tierLists';

const TierListLoading: JSX.Element = <div>Loading ...</div>;

const TierListError: JSX.Element = <div>Something odd happened oof</div>;

const TierListAppFirestore: React.FC = () => {
  const authUser = useAuthentication();
  const authUserId = authUser ? authUser.uid : '';
  const { tierListData, isLoading, isError, methods } = useTierListFirestore(authUserId);
  const [tierListState, dispatch] = React.useReducer(TierListReducer, []);
  const [selectedList, selectList] = React.useState<string>('');
  React.useEffect(() => {
    const defaultSelectedList =
      tierListData && tierListData.length > 0 ? tierListData[0].tierListId : '';
    selectList(defaultSelectedList);
    dispatch(TierListAction.setTierLists(tierListData));
  }, [tierListData]);
  useUnload(() => {
    console.log('Updating Firebase now!');
    tierListState.map((tierList) => {
      return methods.updateTierList(
        tierList.tierListId,
        tierList.name,
        tierList.order || 0,
        tierList.lists || [],
      );
    });
  });

  const methodSet: ITierListMethods = {
    ...methods,
    updateTierListInfo: (tierListId, name, order) => {
      dispatch(TierListAction.updateTierListInfo(tierListId, name, order));
    },
    saveTierLists: async (completeTierListData) => {
      completeTierListData.map((tierList) => {
        return methods.updateTierList(
          tierList.tierListId,
          tierList.name,
          tierList.order || 0,
          tierList.lists || [],
        );
      });
    },
    createChampionList: (tierListId, name, description, order) => {
      dispatch(TierListAction.createChampionList(tierListId, name, description, order));
    },
    updateChampionListInfo: (tierListId, championListId, name, description, order) => {
      dispatch(
        TierListAction.updateChampionListInfo(tierListId, championListId, name, description, order),
      );
    },
    deleteChampionList: (tierListId, championListId) => {
      dispatch(TierListAction.deleteChampionList(tierListId, championListId));
    },
    addChampionEntry: (tierListId, championListId, championId, note) => {
      dispatch(TierListAction.addChampionEntry(tierListId, championListId, championId, note));
    },
    updateChampionEntry: (tierListId, championListId, championEntryId, note) => {
      dispatch(
        TierListAction.updateChampionEntry(tierListId, championListId, championEntryId, note),
      );
    },
    deleteChampionEntry: (tierListId, championListId, championEntryId) => {
      dispatch(TierListAction.deleteChampionEntry(tierListId, championListId, championEntryId));
    },
    selectList,
  };

  if (isLoading) {
    return TierListLoading;
  }

  if (isError) {
    return TierListError;
  }

  return <TierListApp data={tierListState} selectedList={selectedList} methods={methodSet} />;
};

export default TierListAppFirestore;
