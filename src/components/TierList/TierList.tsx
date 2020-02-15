import React from 'react';
import styled from 'styled-components';
import { Button, Modal, Input } from 'react-rainbow-components';
import ChampionList from '@/components/ChampionList';
import { ITierList } from '@/types/tierLists';

const TierList: React.FC<ITierList> = ({
  tierListId,
  authorId,
  name,
  order = 0,
  lists = [],
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
  const [newTierListName, setNewTierListName] = React.useState<string>(name);
  const [newTierListError, setNewTierListError] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    setNewTierListName(name);
  }, [name]);
  const EditTierListModal: JSX.Element = (
    <Modal
      id="edit-tierlist-modal"
      isOpen={isEditTierListModalOpen}
      onRequestClose={() => {
        setTierListModalOpen(false);
        setNewTierListName('');
        setNewTierListError(undefined);
      }}
    >
      <form id="edit-tierlist-form">
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
            updateTierListInfo(tierListId, newTierListName, order);
            setTierListModalOpen(false);
          }}
        >
          Save Tierlist!
        </Button>
      </form>
    </Modal>
  );

  return (
    <>
      {lists &&
        lists.map((championList) => (
          <ChampionList
            championListId={championList.championListId}
            name={championList.name}
            description={championList.description}
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
      {EditTierListModal}
      <Button
        type="button"
        variant="neutral"
        onClick={() => {
          setTierListModalOpen(true);
        }}
      >
        Edit this list
      </Button>
      <Button type="button" variant="destructive" onClick={() => deleteTierList(tierListId)}>
        Delete this list
      </Button>
    </>
  );
};

export default TierList;
