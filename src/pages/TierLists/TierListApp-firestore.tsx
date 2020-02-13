import React from 'react';
import TierListApp from './TierListApp';
import useAuthentication from '@/hooks/useAuthentication';
import useTierListFirestore from '@/hooks/useTierListFirestore';
import TierListReducer from './TierListReducer';

const TierListLoading: JSX.Element = <div>Loading ...</div>;

const TierListError: JSX.Element = <div>Something odd happened oof</div>;

const TierListAppFirestore: React.FC = () => {
  const authUser = useAuthentication();
  const authUserId = authUser ? authUser.uid : undefined;
  const { tierListData, isLoading, isError, methods } = useTierListFirestore(authUserId);
  const [tierListState, dispatch] = React.useReducer(TierListReducer, []);
  const [selectedList, selectList] = React.useState<string>('');
  React.useEffect(() => {
    const defaultSelectedList =
      tierListData && tierListData.length > 0 ? tierListData[0].tierListId : '';
    selectList(defaultSelectedList);
  }, [tierListData]);

  const methodSet = {
    ...methods,
    deleteTierList: async (id: string) => {
      return methods.deleteTierList(id);
    },
    selectList,
  };

  if (isLoading) {
    return TierListLoading;
  }

  if (isError) {
    return TierListError;
  }

  return <TierListApp data={tierListData} selectedList={selectedList} methods={methodSet} />;
};

export default TierListAppFirestore;
