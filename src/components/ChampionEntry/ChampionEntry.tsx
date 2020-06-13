import React from 'react';
import styled from 'styled-components';
import { useDrag, DragPreviewImage } from 'react-dnd';
import ChampionBox from '@/components/ChampionBox';
import { DnDTierListTypes, DnDChampionEntryItem, IChampionEntry } from '@/types';
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
  const championData = useChampionData(championId);
  let imageUrl: string | undefined;
  if (championData) {
    const {
      image: { full },
      version,
    } = championData;
    imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${full}`;
  }
  const dndItemData: DnDChampionEntryItem = {
    type: DnDTierListTypes.ChampionElement,
    championEntryId,
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
        deleteChampionEntry(championEntryId);
      }}
    >
      {imageUrl && <DragPreviewImage connect={preview} src={imageUrl} />}
      <ChampionBox championId={championId} />
      {note && <span>{note}</span>}
    </StyledChampionEntry>
  );
};

export default ChampionEntry;
