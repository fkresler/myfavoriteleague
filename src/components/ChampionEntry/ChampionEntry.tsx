import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import ChampionBox from '@/components/ChampionBox';
import { DnDTierListTypes, DnDChampionEntryItem, IChampionEntry } from '@/types';

const StyledChampionEntry = styled.div`
  display: inline-block;
  position: relative;

  span {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    max-width: 5rem;
    top: -50%;
    left: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.mainColorDark};
    color: ${(props) => props.theme.colors.fontColorLight};
    padding: 0.5rem;
    text-align: center;
    transition: opacity 0.3s;
  }

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ChampionEntry: React.FC<IChampionEntry> = ({
  championEntryId,
  championId,
  note,
  deleteChampionEntry,
}: IChampionEntry) => {
  const dndItemData: DnDChampionEntryItem = {
    type: DnDTierListTypes.ChampionElement,
    championEntryId,
    note,
    championId,
  };
  const [, dragRef] = useDrag({
    item: dndItemData,
  });
  return (
    <StyledChampionEntry
      ref={dragRef}
      onContextMenu={(event) => {
        event.preventDefault();
        deleteChampionEntry(championEntryId);
      }}
    >
      <ChampionBox championId={championId} />
      {note && <span>{note}</span>}
    </StyledChampionEntry>
  );
};

export default ChampionEntry;
