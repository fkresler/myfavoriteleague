import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import TierListModal from '@/components/TierList/TierListModal';
import SegmentedSelect from '@/components/SegmentedSelect';
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
    state: { hasLoaded, isLoading, isError, data },
    dispatch,
  } = tierlists;
  const [selectedList, selectList] = React.useState<string | undefined>(undefined);

  const tierListSelectData = data.map((tierList) => ({
    id: tierList.id,
    name: tierList.name,
    order: tierList.order,
  }));
  const currentTierListData = data.find((tierList) => tierList.id === selectedList);
  const [isAddTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!hasLoaded) {
      dispatch(tierListActions.fetchTierLists());
    }
  }, [authUser]);

  React.useEffect(() => {
    if (!selectedList) {
      const defaultSelectedElement = data.length > 0 ? data[0].id : undefined;
      selectList(defaultSelectedElement);
    }
  }, [hasLoaded]);

  const TierListLoading: JSX.Element = <div>Loading ...</div>;

  const TierListError: JSX.Element = <div>Something odd happened oof</div>;

  const AddTierList: JSX.Element = (
    <>
      <TierListModal
        isModalOpen={isAddTierListModalOpen}
        handleTierListData={(tlName) => {
          if (authUser) {
            dispatch(tierListActions.addTierList(authUser.uid, tlName, { order: data.length }));
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

  if (isLoading) {
    return TierListLoading;
  }

  if (isError) {
    return TierListError;
  }

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
            id={currentTierListData.id}
            authorId={currentTierListData.authorId}
            name={currentTierListData.name}
            role={currentTierListData.role}
            isPublic={currentTierListData.isPublic}
            isRemovable={currentTierListData.isRemovable}
            order={currentTierListData.order}
            lists={currentTierListData.lists}
            dispatch={dispatch}
          />
        )}
      </>
    );
  }

  return (
    <>
      {AddTierList}
      <div>You have no content yet :( Go create some!</div>
    </>
  );
};

export default TierListApp;
