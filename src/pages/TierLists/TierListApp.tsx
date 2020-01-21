import React from 'react';
import TierList from '@/components/TierList';
import TierListMock from '@/mocks/TierListMock';

const ChampionListApp: React.FC = () => {
  const tierListData = TierListMock;

  return (
    <>
      {tierListData.map((tierList) => (
        <>
          <div>Tierlist: {tierList.name}</div>
          <div>Author: {tierList.authorId}</div>
          <TierList
            tierListId={tierList.tierListId}
            authorId={tierList.authorId}
            name={tierList.name}
            lists={tierList.lists}
            updateTierList={() => { }}
            deleteTierList={() => { }}
          />
        </>
      ))}
    </>
  );
};

export default ChampionListApp;
