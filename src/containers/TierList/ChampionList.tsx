import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { FaPlus, FaEdit, FaTrash, FaTimesCircle } from 'react-icons/fa';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import {
  DnDTierListTypes,
  DnDTierListItemData,
  ChampionListData,
  ChampionListEntryData,
} from '@/types';
import { ChampionSelect } from '@/containers/ChampionSelect';
import ChampionListModal from './ChampionListModal';
import ChampionListEntry from './ChampionEntry';

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

export type IChampionList = ChampionListData & {
  isDroppable?: boolean;
  nonAddableChampions?: string[];
  onEdit?: (championListId: string, data: Partial<ChampionListData>) => void;
  onClear?: (championListId: string) => void;
  onDelete?: (championListId: string) => void;
  onAddEntry?: (championListId: string, data: Partial<ChampionListEntryData>) => void;
  onUpdateEntry?: (championListId: string, data: Partial<ChampionListEntryData>) => void;
  onDropEntry?: (championListId: string, championEntryId: string) => void;
  onDeleteEntry?: (championListId: string, championEntryId: string) => void;
};

const ChampionList: React.FC<IChampionList> = ({
  id,
  name,
  description,
  order,
  entries,
  isDroppable,
  nonAddableChampions,
  onEdit = () => {},
  onClear = () => {},
  onDelete = () => {},
  onAddEntry = () => {},
  onUpdateEntry = () => {},
  onDropEntry = () => {},
  onDeleteEntry = () => {},
}) => {
  const [selectedChampions, setSelectedChampions] = React.useState<string[]>([]);
  const [isEditModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [isChampionEntryModalOpen, setChampionEntryModalOpen] = React.useState<boolean>(false);
  const [, dropRef] = useDrop({
    accept: DnDTierListTypes.ChampionElement,
    drop: (item: DnDTierListItemData<ChampionListEntryData>) => {
      onDropEntry(id, item.id);
    },
  });

  const sortedEntries = entries.sort((entryA, entryB) =>
    entryB.championId > entryA.championId ? -1 : 1,
  );

  const AddChampionEntry: React.ReactNode = (
    <>
      <Modal
        isOpen={isChampionEntryModalOpen}
        onRequestClose={() => setChampionEntryModalOpen(false)}
        footer={
          <Button
            variant="constructive"
            onClick={() => {
              selectedChampions.map((championId) => onAddEntry(id, { championId }));
              setChampionEntryModalOpen(false);
            }}
          >
            These are my champions!
          </Button>
        }
      >
        <ChampionSelect
          showFilter
          excludedChampions={nonAddableChampions}
          onChange={(selection) => setSelectedChampions(selection)}
        />
      </Modal>
      <Button variant="constructive" onClick={() => setChampionEntryModalOpen(true)}>
        <FaPlus />
      </Button>
    </>
  );

  const CardActions: React.ReactNode = (
    <StyledChampionListFooter>
      <ChampionListModal
        isModalOpen={isEditModalOpen}
        initialChampionListData={{
          id,
          name,
          description,
          order,
          entries,
        }}
        handleChampionListData={(clName, clDescription) =>
          onEdit(id, {
            name: clName,
            description: clDescription,
            order,
            entries,
          })
        }
        closeModalBox={() => setEditModalOpen(false)}
      />
      <Button variant="base" onClick={() => setEditModalOpen(true)}>
        <FaEdit />
      </Button>
      <Button variant="base" onClick={() => onClear(id)}>
        <FaTimesCircle />
      </Button>
      <Button variant="base" onClick={() => onDelete(id)}>
        <FaTrash />
      </Button>
    </StyledChampionListFooter>
  );

  return (
    <div ref={isDroppable ? dropRef : undefined}>
      <Card headline={name} subHeadline={description} action={CardActions}>
        <StyledChampionContainer>
          {sortedEntries &&
            sortedEntries.map((champion) => (
              <ChampionListEntry
                key={champion.id}
                id={champion.id}
                championId={champion.championId}
                note={champion.note}
                onUpdate={(entryData) => onUpdateEntry(id, entryData)}
                onDelete={(entryId) => onDeleteEntry(id, entryId)}
              />
            ))}
          {AddChampionEntry}
        </StyledChampionContainer>
      </Card>
    </div>
  );
};

export default ChampionList;
