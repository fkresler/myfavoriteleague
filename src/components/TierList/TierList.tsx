import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import ChampionList from '@/components/ChampionList';
import TierListModal from '@/components/TierListModal';
import ChampionListModal from '@/components/ChampionListModal';
import { ITierList } from '@/types/tierLists';

const TierList: React.FC<ITierList> = ({
  tierListId,
  authorId,
  name,
  order,
  lists,
  methods: {
    updateTierListInfo,
    deleteTierList,
    createChampionList,
    updateChampionListInfo,
    deleteChampionList,
    addChampionEntry,
    updateChampionEntry,
    deleteChampionEntry,
  },
}) => {
  const [isEditTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);
  const [isAddChampionListModalOpen, setChampionListModalOpen] = React.useState<boolean>(false);
  const sortedChampionLists = lists.sort((clA, clB) => clA.order - clB.order);

  const EditTierList: JSX.Element = (
    <>
      <TierListModal
        isModalOpen={isEditTierListModalOpen}
        initialTierListData={{ tierListId, authorId, name, order, lists }}
        handleTierListData={(tlName) => {
          updateTierListInfo(tierListId, tlName, order);
        }}
        closeModalBox={() => setTierListModalOpen(false)}
      />
      <Button
        type="button"
        variant="neutral"
        onClick={() => {
          setTierListModalOpen(true);
        }}
      >
        Edit this list
      </Button>
    </>
  );

  const AddChampionList: JSX.Element = (
    <>
      <ChampionListModal
        isModalOpen={isAddChampionListModalOpen}
        handleChampionListData={(clName, clDescription) =>
          createChampionList(tierListId, clName, clDescription, sortedChampionLists.length)
        }
        closeModalBox={() => setChampionListModalOpen(false)}
      />
      <Button
        type="button"
        variant="neutral"
        onClick={() => {
          setChampionListModalOpen(true);
        }}
      >
        Add another Championlist!
      </Button>
    </>
  );

  return (
    <>
      {sortedChampionLists &&
        sortedChampionLists.map((championList) => (
          <ChampionList
            championListId={championList.championListId}
            name={championList.name}
            description={championList.description}
            order={championList.order}
            entries={championList.entries}
            updateChampionList={(clId, clName, clDescription, clOrder) =>
              updateChampionListInfo(tierListId, clId, clName, clDescription, clOrder)
            }
            deleteChampionList={(clId) => deleteChampionList(tierListId, clId)}
            addChampionEntry={(clId, championId, note) =>
              addChampionEntry(tierListId, clId, championId, note)
            }
            updateChampionEntry={(clId, ceId, note) =>
              updateChampionEntry(tierListId, clId, ceId, note)
            }
            deleteChampionEntry={(clId, ceId) => deleteChampionEntry(tierListId, clId, ceId)}
          />
        ))}
      {AddChampionList}
      {EditTierList}
      <Button type="button" variant="destructive" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </Button>
    </>
  );
};

export default TierList;
