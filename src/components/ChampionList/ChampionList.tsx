import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-rainbow-components';
import { IChampionList } from '@/types/tierLists';
import ChampionListModal from '@/components/ChampionListModal';
import ChampionEntry from '@/components/ChampionEntry';

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
  deleteChampionEntry,
}) => {
  const [isEditChampionListModalOpen, setChampionListModalOpen] = React.useState<boolean>(false);
  const updateChampionEntryForChampionList = (championEntryId: string, note: string) =>
    updateChampionEntry(championListId, championEntryId, note);
  const deleteChampionEntryForChampionList = (championEntryId: string) =>
    deleteChampionEntry(championListId, championEntryId);
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
  ) : (
    undefined
  );
  return (
    <Card title={name} actions={CardActions} footer={CardFooter}>
      <StyledChampionContainer>
        {entries &&
          entries.map((champion) => (
            <ChampionEntry
              championEntryId={champion.championEntryId}
              championId={champion.championId}
              note={champion.note}
              updateChampionEntry={updateChampionEntryForChampionList}
              deleteChampionEntry={deleteChampionEntryForChampionList}
            />
          ))}
      </StyledChampionContainer>
    </Card>
  );
};

export default ChampionList;
