import React from 'react';
import { Button, Modal, Input } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import { ITierListApp } from '@/types/tierLists';

const TierListApp: React.FC<ITierListApp> = ({ data: tierListData, selectedList, methods }) => {
  const tierListSelectData = tierListData.map((tierList) => ({
    id: tierList.tierListId,
    name: tierList.name,
    order: tierList.order || 0,
  }));
  const currentTierListData = tierListData.find((tierList) => tierList.tierListId === selectedList);
  const { selectList, createTierList, saveTierLists } = methods;
  const [isAddTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);
  const [newTierListName, setNewTierListName] = React.useState<string>('');
  const [newTierListError, setNewTierListError] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (newTierListName.length === 0 || !newTierListName.trim()) {
      setNewTierListError('This field is required');
    } else {
      setNewTierListError(undefined);
    }
  }, [newTierListName]);

  const AddTierListButton: JSX.Element = (
    <Button type="button" variant="success" onClick={() => setTierListModalOpen(true)}>
      Add TierList!
    </Button>
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

  const AddTierListModal: JSX.Element = (
    <Modal
      id="add-tierlist-modal"
      isOpen={isAddTierListModalOpen}
      onRequestClose={() => {
        setTierListModalOpen(false);
        setNewTierListName('');
        setNewTierListError(undefined);
      }}
    >
      <form id="add-tierlist-form">
        <Input
          label="Tierlist Name"
          placeholder="e.g. 'Top Lane'"
          required
          type="text"
          error={newTierListError}
          value={newTierListName}
          onChange={(e) => {
            setNewTierListName(e.target.value);
          }}
        />
        <Button
          type="submit"
          variant="success"
          onClick={() => {
            createTierList(newTierListName, tierListData.length);
            setTierListModalOpen(false);
          }}
        >
          Add Tierlist!
        </Button>
      </form>
    </Modal>
  );

  if (tierListData) {
    return (
      <>
        {AddTierListButton}
        {SaveTierListsButton}
        {AddTierListModal}
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
