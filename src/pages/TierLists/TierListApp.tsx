import React from 'react';
import { Button } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import { ITierListData, IChampionListData } from '@/types/tierLists';

interface ITierListApp {
  data: ITierListData[];
  selectedList: string;
  methods: {
    selectList: (id: string) => void;
    createTierList: (name: string, order: number) => void;
    updateTierList: (id: string, name: string, order: number, lists: IChampionListData[]) => void;
    deleteTierList: (id: string) => void;
  };
}

const TierListApp: React.FC<ITierListApp> = ({
  data: tierListData,
  selectedList,
  methods: { selectList, createTierList, updateTierList, deleteTierList },
}) => {
  const tierListSelectData = tierListData.map((tierList) => ({
    id: tierList.tierListId,
    name: tierList.name,
  }));
  const currentTierListData = tierListData.find((tierList) => tierList.tierListId === selectedList);

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
            updateTierList={updateTierList}
            deleteTierList={deleteTierList}
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
