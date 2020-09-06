import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { FaBan, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import Card from '@/components/Card';
import { Button, ButtonIcon, Modal } from 'react-rainbow-components';
import ChampionListModal from '@/components/TierList/ChampionListModal';
import {
  DnDTierListTypes,
  DnDTierListItemData,
  ChampionListData,
  ChampionListEntryData,
} from '@/types';
import ChampionSelect from '@/components/ChampionSelect';
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
  onDelete?: (championListId: string) => void;
  onAddEntry?: (championListId: string, data: Partial<ChampionListEntryData>) => void;
  onUpdateEntry?: (championListId: string, data: Partial<ChampionListEntryData>) => void;
  onDropEntry?: (championListId: string, championEntryId: string) => void;
  onDeleteEntry?: (championListId: string, championEntryId: string) => void;
};

export const ChampionList: React.FC<IChampionList> = ({
  id,
  name,
  description,
  order,
  entries,
  isDroppable,
  nonAddableChampions,
  onEdit = () => {},
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
        id="championentry-modal"
        size="large"
        isOpen={isChampionEntryModalOpen}
        onRequestClose={() => setChampionEntryModalOpen(false)}
        footer={
          <Button
            type="button"
            variant="success"
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
          onSelectionChange={(selection) => setSelectedChampions(selection)}
        />
      </Modal>
      <ButtonIcon
        type="button"
        variant="success"
        icon={<FaPlus />}
        onClick={() => setChampionEntryModalOpen(true)}
      />
    </>
  );

  const CardActions: React.ReactNode = (
    <StyledChampionListFooter>
      <ChampionListModal
        isModalOpen={isEditModalOpen}
        initialChampionListData={{ id, name, description, order, entries }}
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
      <ButtonIcon
        type="button"
        variant="base"
        icon={<FaEdit />}
        onClick={() => setEditModalOpen(true)}
      />
      <ButtonIcon type="button" variant="base" icon={<FaBan />} onClick={() => {}} />
      <ButtonIcon type="button" variant="base" icon={<FaTrash />} onClick={() => onDelete(id)} />
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
