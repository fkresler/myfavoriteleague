import React from 'react';
import styled from 'styled-components';
import { useDrag, DragPreviewImage } from 'react-dnd';
import ChampionBox from '@/components/ChampionBox';
import { DnDTierListTypes, ChampionListEntryData } from '@/types';
import { useChampionData } from '@/providers/StaticLeagueProvider/useChampionData';

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
    background-color: ${({ theme }) => theme.colors.greyDark.default};
    color: ${({ theme }) => theme.colors.greyDark.text};
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
  onUpdate?: (data: Partial<ChampionListEntryData>) => void;
  onDelete?: (championEntryId: string) => void;
};

export const ChampionEntry: React.FC<IChampionListEntry> = ({
  id,
  championId,
  note,
  onDelete = () => {},
}) => {
  const { data: championData } = useChampionData(championId);
  const dataVersion = championData?.version;
  const imageName = championData?.image?.full;
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${dataVersion}/img/champion/${imageName}`;
  const [, dragRef, preview] = useDrag(() => ({
    type: DnDTierListTypes.ChampionElement,
    item: {
      type: DnDTierListTypes.ChampionElement,
      id,
      note,
      championId,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));
  return (
    <StyledChampionEntry
      ref={dragRef}
      onContextMenu={(event) => {
        event.preventDefault();
        onDelete(id);
      }}
    >
      {imageUrl && <DragPreviewImage connect={preview} src={imageUrl} />}
      <ChampionBox championId={championId} />
      {note && <span>{note}</span>}
    </StyledChampionEntry>
  );
};

export default ChampionEntry;
