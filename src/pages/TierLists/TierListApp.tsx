import React from 'react';
import { Button } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import { ITierListApp } from '@/types/tierLists';

const TierListApp: React.FC<ITierListApp> = ({ data: tierListData, selectedList, methods }) => {
  const tierListSelectData = tierListData.map((tierList) => ({
    id: tierList.tierListId,
    name: tierList.name,
  }));
  const currentTierListData = tierListData.find((tierList) => tierList.tierListId === selectedList);
  const { selectList, createTierList } = methods;

  const AddTierListButton: JSX.Element = (
    <Button type="button" variant="success" onClick={() => createTierList('Test', 0)}>
      Add TierList!
    </Button>
  );

  if (tierListData) {
    return (
      <>
        {AddTierListButton}
        {tierListData && (
          <SegmentedSelect
            choices={tierListSelectData}
            currentlySelectedChoice={selectedList}
            onChoiceSelection={selectList}
          />
        )}
        {currentTierListData && (
          <TierList
            tierListId={currentTierListData.tierListId}
            authorId={currentTierListData.authorId}
            name={currentTierListData.name}
            lists={currentTierListData.lists}
            methods={methods}
          />
        )}
      </>
    );
  }

  return (
    <>
      {AddTierListButton}
      <div>You have no content yet :( Go create some!</div>;
    </>
  );
};

export default TierListApp;
