import React, { useState } from 'react';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import { ITierListData } from '@/types/tierLists';

interface IChampionListApp {
  data: ITierListData[];
  methods: {
    createTierList: (name?: string, description?: string, order?: number) => void;
    updateTierList: (id: string, name?: string, description?: string, order?: number) => void;
    deleteTierList: (id: string) => void;
  };
}

const ChampionListApp: React.FC<IChampionListApp> = ({
  data: tierListData,
  methods: { createTierList, updateTierList, deleteTierList },
}) => {
  const defaultSelectedTierList = tierListData ? tierListData[0].name : undefined;
  const [selectedList, selectList] = useState<string | undefined>(defaultSelectedTierList);

  const availableTierLists = tierListData.map((tierList) => tierList.name);
  const currentTierListData = tierListData.find((tierList) => tierList.name === selectedList);

  const AddTierListButton: JSX.Element = (
    <button type="button" onClick={() => createTierList('Test')}>
      Add TierList!
    </button>
  );

  if (tierListData) {
    return (
      <>
        {AddTierListButton}
        {tierListData && (
          <SegmentedSelect
            choices={availableTierLists}
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

export default ChampionListApp;
