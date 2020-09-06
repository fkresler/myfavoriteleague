import React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';
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
  dispatch,
}) => {
  const [isEditTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);
  const [isAddChampionListModalOpen, setChampionListModalOpen] = React.useState<boolean>(false);
  const sortedChampionLists = lists.sort((clA, clB) => clA.order - clB.order);

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
      <ButtonIcon
        type="button"
        variant="base"
        icon={<FaEdit />}
        onClick={() => {
          setTierListModalOpen(true);
        }}
      />
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
      <ButtonIcon
        type="button"
        variant="success"
        icon={<FaPlus />}
        onClick={() => {
          setChampionListModalOpen(true);
        }}
      />
    </>
  );

  return (
    <>
      <StyledChampionListSpacer>
        {sortedChampionLists &&
          sortedChampionLists.map((championList) => (
            <ChampionList
              isDroppable
              key={championList.id}
              id={championList.id}
              name={championList.name}
              description={championList.description}
              order={championList.order}
              entries={championList.entries}
              onUpdate={(clId, data) => dispatch(tierListActions.updateChampionList(clId, data))}
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
          <ButtonIcon
            type="button"
            variant="base"
            icon={<FaTrash />}
            onClick={() => dispatch(tierListActions.deleteTierList(id))}
          />
        )}
      </StyledAddChampionListRow>
    </>
  );
};

export default TierList;
