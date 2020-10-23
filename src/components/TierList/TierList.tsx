import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { TierListData, TierListAction } from '@/types';
import { tierListActions } from '@/providers/UserDataProvider';
import ChampionList from './ChampionList';
import TierListModal from './TierListModal';
import ChampionListModal from './ChampionListModal';

const StyledChampionListSpacer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-top: 1rem;
  }
`;

const StyledAddChampionListRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export type ITierList = TierListData & {
  allowSingleUseEntriesOnly?: boolean;
  dispatch: (action: TierListAction) => void;
};

const TierList: React.FC<ITierList> = ({
  id,
  authorId,
  name,
  mode,
  role,
  isPublic,
  isRemovable,
  order,
  lists,
  allowSingleUseEntriesOnly,
  dispatch,
}) => {
  const [isEditTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);
  const [isAddChampionListModalOpen, setChampionListModalOpen] = React.useState<boolean>(false);
  const sortedChampionLists = lists.sort((clA, clB) => clA.order - clB.order);

  const championsInUse = lists
    .map((championList) => championList.entries.map((entry) => entry.championId))
    .flat();

  const EditTierList: React.ReactNode = (
    <>
      <TierListModal
        isModalOpen={isEditTierListModalOpen}
        initialTierListData={{
          id,
          authorId,
          name,
          mode,
          role,
          isPublic,
          isRemovable,
          order,
          lists,
        }}
        handleTierListData={(tlName) => {
          dispatch(tierListActions.updateTierList(id, { name: tlName }));
        }}
        closeModalBox={() => setTierListModalOpen(false)}
      />
      <Button
        variant="default"
        onClick={() => {
          setTierListModalOpen(true);
        }}
      >
        <FaEdit />
      </Button>
    </>
  );

  const AddChampionList: React.ReactNode = (
    <>
      <ChampionListModal
        isModalOpen={isAddChampionListModalOpen}
        handleChampionListData={(clName, clDescription) =>
          dispatch(
            tierListActions.addChampionList(id, { name: clName, description: clDescription }),
          )
        }
        closeModalBox={() => setChampionListModalOpen(false)}
      />
      <Button
        variant="success"
        onClick={() => {
          setChampionListModalOpen(true);
        }}
      >
        <FaPlus />
      </Button>
    </>
  );

  return (
    <>
      <StyledChampionListSpacer>
        {sortedChampionLists &&
          sortedChampionLists.map((championList) => (
            <ChampionList
              isDroppable
              nonAddableChampions={allowSingleUseEntriesOnly ? championsInUse : []}
              key={championList.id}
              id={championList.id}
              name={championList.name}
              description={championList.description}
              order={championList.order}
              entries={championList.entries}
              onEdit={(clId, data) => dispatch(tierListActions.updateChampionList(clId, data))}
              onClear={(clId) => dispatch(tierListActions.clearChampionList(clId))}
              onDelete={(clId) => dispatch(tierListActions.deleteChampionList(clId))}
              onAddEntry={(clId, data) =>
                dispatch(tierListActions.addChampionListEntry(id, clId, data))
              }
              onUpdateEntry={(ceId, data) =>
                dispatch(tierListActions.updateChampionListEntry(ceId, data))
              }
              onDropEntry={(clId, ceId) => {
                dispatch(tierListActions.moveChampionListEntry(ceId, id, clId));
              }}
              onDeleteEntry={(clId, ceId) =>
                dispatch(tierListActions.deleteChampionListEntry(ceId))
              }
            />
          ))}
      </StyledChampionListSpacer>
      <StyledAddChampionListRow>
        {AddChampionList}
        {EditTierList}
        {isRemovable && (
          <Button variant="default" onClick={() => dispatch(tierListActions.deleteTierList(id))}>
            <FaTrash />
          </Button>
        )}
      </StyledAddChampionListRow>
    </>
  );
};

export default TierList;
