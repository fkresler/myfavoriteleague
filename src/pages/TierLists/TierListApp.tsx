import React from 'react';
import { Button } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import TierListModal from '@/components/TierListModal';
import { ITierListApp } from '@/types/tierLists';

const TierListApp: React.FC<ITierListApp> = ({ data: tierListData, selectedList, methods }) => {
  const tierListSelectData = tierListData.map((tierList) => ({
    id: tierList.tierListId,
    name: tierList.name,
    order: tierList.order,
  }));
  const currentTierListData = tierListData.find((tierList) => tierList.tierListId === selectedList);
  const { selectList, createTierList, saveTierLists } = methods;
  const [isAddTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);

  const AddTierList: JSX.Element = (
    <>
      <TierListModal
        isModalOpen={isAddTierListModalOpen}
        handleTierListData={(tlName) => createTierList(tlName, tierListData.length)}
        closeModalBox={() => setTierListModalOpen(false)}
      />
      <Button type="button" variant="success" onClick={() => setTierListModalOpen(true)}>
        Add TierList!
      </Button>
    </>
  );

  const SaveTierListsButton: JSX.Element = (
    <Button
      type="button"
      variant="success"
      onClick={() => {
        saveTierLists(tierListData);
      }}
    >
      Save Tierlists
    </Button>
  );

  if (tierListData && tierListData.length > 0) {
    return (
      <>
        {AddTierList}
        {SaveTierListsButton}
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
            order={currentTierListData.order}
            lists={currentTierListData.lists}
            methods={methods}
          />
        )}
      </>
    );
  }

  return (
    <>
      {AddTierList}
      <div>You have no content yet :( Go create some!</div>
    </>
  );
};

export default TierListApp;
