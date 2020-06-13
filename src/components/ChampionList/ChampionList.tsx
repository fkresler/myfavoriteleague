import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { Card, Button } from 'react-rainbow-components';
import ChampionListModal from '@/components/ChampionListModal';
import ChampionEntry from '@/components/ChampionEntry';
import ChampionEntryModal from '@/components/ChampionEntryModal';
import { DnDTierListTypes, IChampionList, DnDChampionEntryItem } from '@/types';

const StyledChampionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 5rem;

  & > * {
    margin: 1rem;
  }
`;

const StyledChampionListFooter = styled.div`
  display: flex;
`;

const ChampionList: React.FC<IChampionList> = ({
  championListId,
  name,
  description,
  order,
  entries,
  updateChampionList,
  deleteChampionList,
  addChampionEntry,
  updateChampionEntry,
  moveChampionEntry,
  deleteChampionEntry,
}) => {
  const [, dropRef] = useDrop({
    accept: DnDTierListTypes.ChampionElement,
    drop: (item: DnDChampionEntryItem) => {
      moveChampionEntry(championListId, item.championEntryId);
    },
  });
  const [isEditChampionListModalOpen, setChampionListModalOpen] = React.useState<boolean>(false);
  const [isChampionEntryModalOpen, setChampionEntryModalOpen] = React.useState<boolean>(false);
  const sortedEntries = entries.sort((entryA, entryB) =>
    entryB.championId > entryA.championId ? -1 : 1,
  );
  const updateChampionEntryForChampionList = (championEntryId: string, note: string) =>
    updateChampionEntry(championListId, championEntryId, note);
  const deleteChampionEntryForChampionList = (championEntryId: string) =>
    deleteChampionEntry(championListId, championEntryId);
  const AddChampionEntry: JSX.Element = (
    <>
      <ChampionEntryModal
        isModalOpen={isChampionEntryModalOpen}
        handleChampionEntryData={(selectedChampions, selectedNote) => {
          selectedChampions.map((championId) => {
            return addChampionEntry(championListId, championId, selectedNote);
          });
        }}
        closeModalBox={() => setChampionEntryModalOpen(false)}
      />
      <Button type="button" variant="success" onClick={() => setChampionEntryModalOpen(true)}>
        +
      </Button>
    </>
  );
  const CardActions: JSX.Element = (
    <StyledChampionListFooter>
      <ChampionListModal
        isModalOpen={isEditChampionListModalOpen}
        initialChampionListData={{ championListId, name, description, order, entries }}
        handleChampionListData={(clName, clDescription) =>
          updateChampionList(championListId, clName, clDescription, order, entries)
        }
        closeModalBox={() => setChampionListModalOpen(false)}
      />
      <Button type="button" variant="neutral" onClick={() => setChampionListModalOpen(true)}>
        Edit
      </Button>
      <Button
        type="button"
        variant="destructive"
        onClick={() => deleteChampionList(championListId)}
      >
        Delete
      </Button>
    </StyledChampionListFooter>
  );
  const CardFooter: JSX.Element | undefined = description ? (
    <StyledChampionListFooter>{description}</StyledChampionListFooter>
  ) : undefined;
  return (
    <div ref={dropRef}>
      <Card title={name} actions={CardActions} footer={CardFooter}>
        <StyledChampionContainer>
          {sortedEntries &&
            sortedEntries.map((champion) => (
              <ChampionEntry
                key={champion.championEntryId}
                championEntryId={champion.championEntryId}
                championId={champion.championId}
                note={champion.note}
                updateChampionEntry={updateChampionEntryForChampionList}
                deleteChampionEntry={deleteChampionEntryForChampionList}
              />
            ))}
          {AddChampionEntry}
        </StyledChampionContainer>
      </Card>
    </div>
  );
};

export default ChampionList;
