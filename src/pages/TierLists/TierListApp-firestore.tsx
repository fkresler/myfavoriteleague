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

  if (isLoading) {
    return TierListLoading;
  }

  if (isError) {
    return TierListError;
  }

  return <TierListApp data={tierListData} methods={methods} />;
};

export default TierListAppFirestore;
