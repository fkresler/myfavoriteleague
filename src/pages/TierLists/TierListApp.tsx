import React, { useState } from 'react';
import TierList from '@/components/TierList';
import TierListMock from '@/mocks/TierListMock';
import SegmentedSelect from '@/components/SegmentedSelect';

const ChampionListApp: React.FC = () => {
  const tierListData = TierListMock;
  const availableTierLists = tierListData.map((tierList) => tierList.name);
  const defaultSelectedTierList = availableTierLists ? availableTierLists[0] : undefined;
  const [selectedList, selectList] = useState(defaultSelectedTierList);
  const currentTierListData = tierListData.find((tierList) => tierList.name === selectedList);
  return (
    <>
      <SegmentedSelect
        choices={availableTierLists}
        currentlySelectedChoice={selectedList}
        onChoiceSelection={selectList}
      />
      {currentTierListData && (
        <TierList
          tierListId={currentTierListData.tierListId}
          authorId={currentTierListData.authorId}
          name={currentTierListData.name}
          lists={currentTierListData.lists}
          updateTierList={() => {}}
          deleteTierList={() => {}}
        />
      )}
    </>
  );
};

export default ChampionListApp;
