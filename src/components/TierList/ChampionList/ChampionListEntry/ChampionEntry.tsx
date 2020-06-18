import React from 'react';
import styled from 'styled-components';
import { useDrag, DragPreviewImage } from 'react-dnd';
import ChampionBox from '@/components/ChampionBox';
import { DnDTierListTypes, DnDTierListItemData, ChampionListEntryData } from '@/types';
import useChampionData from '@/hooks/useChampionData';

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
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) =>
      theme.colors.text.getTextColorByBackground(theme.colors.background.secondary)};
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

export type IChampionListEntry = ChampionListEntryData & {
  updateChampionEntry: (championEntryId: string, note: string) => void;
  deleteChampionEntry: (championEntryId: string) => void;
};

const ChampionEntry: React.FC<IChampionListEntry> = ({
  id,
  championId,
  note,
  deleteChampionEntry,
}) => {
  const championData = useChampionData(championId);
  let imageUrl: string | undefined;
  if (championData) {
    const {
      image: { full },
      version,
    } = championData;
    imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${full}`;
  }
  const dndItemData: DnDTierListItemData<ChampionListEntryData> = {
    type: DnDTierListTypes.ChampionElement,
    id,
    note,
    championId,
  };
  const [, dragRef, preview] = useDrag({
    item: dndItemData,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <StyledChampionEntry
      ref={dragRef}
      onContextMenu={(event) => {
        event.preventDefault();
        deleteChampionEntry(id);
      }}
    >
      {imageUrl && <DragPreviewImage connect={preview} src={imageUrl} />}
      <ChampionBox championId={championId} />
      {note && <span>{note}</span>}
    </StyledChampionEntry>
  );
};

export default ChampionEntry;
