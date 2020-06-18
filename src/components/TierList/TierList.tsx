import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { FaPlus } from 'react-icons/fa';
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

const StyledTierListActionRow = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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

  const EditTierList: JSX.Element = (
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
        type="button"
        variant="neutral"
        onClick={() => {
          setTierListModalOpen(true);
        }}
      >
        Edit this list
      </Button>
    </>
  );

  const AddChampionList: JSX.Element = (
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
        type="button"
        variant="success"
        onClick={() => {
          setChampionListModalOpen(true);
        }}
      >
        <FaPlus size="3rem" />
      </Button>
    </>
  );

  return (
    <>
      <StyledChampionListSpacer>
        {sortedChampionLists &&
          sortedChampionLists.map((championList) => (
            <ChampionList
              key={championList.id}
              id={championList.id}
              name={championList.name}
              description={championList.description}
              order={championList.order}
              entries={championList.entries}
              updateChampionList={(clId, clName, clDescription, clOrder) =>
                dispatch(
                  tierListActions.updateChampionList(clId, {
                    name: clName,
                    description: clDescription,
                    order: clOrder,
                  }),
                )
              }
              deleteChampionList={(clId) => dispatch(tierListActions.deleteChampionList(clId))}
              addChampionEntry={(clId, championId, note) =>
                dispatch(
                  tierListActions.addChampionListEntry(id, clId, championId, {
                    note,
                  }),
                )
              }
              updateChampionEntry={(clId, ceId, note) =>
                dispatch(tierListActions.updateChampionListEntry(ceId, { note }))
              }
              moveChampionEntry={(clId, ceId) => {
                dispatch(tierListActions.moveChampionListEntry(ceId, id, clId));
              }}
              deleteChampionEntry={(clId, ceId) =>
                dispatch(tierListActions.deleteChampionListEntry(ceId))
              }
            />
          ))}
      </StyledChampionListSpacer>
      <StyledAddChampionListRow>{AddChampionList}</StyledAddChampionListRow>
      <StyledTierListActionRow>
        {EditTierList}
        <Button
          type="button"
          variant="destructive"
          onClick={() => dispatch(tierListActions.deleteTierList(id))}
        >
          Delete this list
        </Button>
      </StyledTierListActionRow>
    </>
  );
};

export default TierList;
