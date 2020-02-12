import React from 'react';
import TierListApp from './TierListApp';
import useAuthentication from '@/hooks/useAuthentication';
import useTierListFirestore from '@/hooks/useTierListFirestore';

const TierListLoading: JSX.Element = <div>Loading ...</div>;

const TierListError: JSX.Element = <div>Something odd happened oof</div>;

const TierListAppFirestore: React.FC = () => {
  const authUser = useAuthentication();
  const authUserId = authUser ? authUser.uid : undefined;
  const { tierListData, isLoading, isError, methods } = useTierListFirestore(authUserId);
  const initialSelectedTierList =
    tierListData && tierListData.length > 0 ? tierListData[0].tierListId : '';
  const [selectedList, selectList] = React.useState<string>(initialSelectedTierList);
  const methodSet = {
    ...methods,
    deleteTierList: (id: string) => {
      methods.deleteTierList(id);
      selectList(tierListData && tierListData.length > 0 ? tierListData[0].tierListId : '');
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
