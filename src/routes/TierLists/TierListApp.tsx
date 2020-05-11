import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import SegmentedSelect from '@/components/SegmentedSelect';
import TierListModal from '@/components/TierListModal';
import { UserDataContext, tierListActions } from '@/providers/UserDataProvider';
import { FirebaseContext } from '@/providers/FirebaseProvider';

const StyledSegmentedSection = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > *:first-child {
    flex-grow: 1;
  }

  & > *:last-child {
    margin-left: 1rem;
  }
`;

const TierListApp: React.FC = () => {
  const { authUser } = React.useContext(FirebaseContext);
  const { tierlists } = React.useContext(UserDataContext);
  const {
    state: { isLoading, isError, data },
    dispatch,
  } = tierlists;
  const [selectedList, selectList] = React.useState<string | undefined>(undefined);

  const tierListSelectData = data.map((tierList) => ({
    id: tierList.tierListId,
    name: tierList.name,
    order: tierList.order,
  }));
  const currentTierListData = data.find((tierList) => tierList.tierListId === selectedList);
  const [isAddTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);

  const TierListLoading: JSX.Element = <div>Loading ...</div>;

  const TierListError: JSX.Element = <div>Something odd happened oof</div>;

  const AddTierList: JSX.Element = (
    <>
      <TierListModal
        isModalOpen={isAddTierListModalOpen}
        handleTierListData={(tlName) => {
          if (authUser) {
            dispatch(tierListActions.addTierList(authUser.uid, tlName, data.length));
          }
        }}
        closeModalBox={() => setTierListModalOpen(false)}
      />
      <Button type="button" variant="success" onClick={() => setTierListModalOpen(true)}>
        +
      </Button>
    </>
  );

  const SaveTierListsButton: JSX.Element = (
    <Button
      type="button"
      variant="success"
      onClick={() => {
        dispatch(tierListActions.pushTierLists());
      }}
    >
      Save Tierlists
    </Button>
  );

  if (data && data.length > 0) {
    return (
      <>
        {SaveTierListsButton}
        <StyledSegmentedSection>
          {data && (
            <SegmentedSelect
              choices={tierListSelectData}
              currentlySelectedChoice={selectedList}
              onChoiceSelection={selectList}
            />
          )}
          {AddTierList}
        </StyledSegmentedSection>
        {currentTierListData && (
          <TierList
            tierListId={currentTierListData.tierListId}
            authorId={currentTierListData.authorId}
            name={currentTierListData.name}
            order={currentTierListData.order}
            lists={currentTierListData.lists}
            dispatch={dispatch}
          />
        )}
      </>
    );
  }

  if (isLoading) {
    return TierListLoading;
  }

  if (isError) {
    return TierListError;
  }

  return (
    <>
      {AddTierList}
      <div>You have no content yet :( Go create some!</div>
    </>
  );
};

export default TierListApp;
