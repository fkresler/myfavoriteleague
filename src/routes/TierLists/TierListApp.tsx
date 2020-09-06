import React from 'react';
import styled from 'styled-components';
import { Button, ButtonIcon } from 'react-rainbow-components';
import TierList from '@/components/TierList';
import TierListModal from '@/components/TierList/TierListModal';
import SegmentedSelect from '@/components/SegmentedSelect';
import { UserDataContext, tierListActions } from '@/providers/UserDataProvider';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { FaPlus } from 'react-icons/fa';

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

const TierListApp: React.FC<{}> = () => {
  const { authUser } = React.useContext(FirebaseContext);
  const { tierlists } = React.useContext(UserDataContext);
  const {
    state: { hasLoaded, isLoading, isError, data },
    dispatch,
  } = tierlists;
  const [selectedList, selectList] = React.useState<string | undefined>(undefined);
  const [isAddTierListModalOpen, setTierListModalOpen] = React.useState<boolean>(false);

  const tierListSelectData = data.map((tierList) => ({
    id: tierList.id,
    name: tierList.name,
    order: tierList.order,
  }));
  const currentTierListData = data.find((tierList) => tierList.id === selectedList);

  React.useEffect(() => {
    if (!hasLoaded) {
      dispatch(tierListActions.fetchTierLists());
    }
  }, [authUser, hasLoaded, dispatch]);

  React.useEffect(() => {
    if (!selectedList) {
      const defaultSelectedElement = data.length > 0 ? data[0].id : undefined;
      selectList(defaultSelectedElement);
    }
  }, [hasLoaded, data, selectedList]);

  const AddTierList: React.ReactNode = (
    <>
      <TierListModal
        isModalOpen={isAddTierListModalOpen}
        isCreateMode
        handleTierListData={(tlName, tlTemplate) => {
          if (authUser) {
            dispatch(
              tierListActions.addTierList(
                authUser.uid,
                { name: tlName, order: data.length },
                tlTemplate,
              ),
            );
          }
        }}
        closeModalBox={() => setTierListModalOpen(false)}
      />
      <ButtonIcon
        type="button"
        variant="success"
        icon={<FaPlus />}
        onClick={() => setTierListModalOpen(true)}
      />
    </>
  );

  const SaveTierListsButton: React.ReactNode = (
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
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Something odd happened oof</div>;
  }

  if (data && data.length > 0) {
    return (
      <>
        {SaveTierListsButton}
        <StyledSegmentedSection>
          {data && (
            <SegmentedSelect
              choices={tierListSelectData}
              selectedId={selectedList}
              onSelect={selectList}
            />
          )}
          {AddTierList}
        </StyledSegmentedSection>
        {currentTierListData && (
          <TierList
            id={currentTierListData.id}
            authorId={currentTierListData.authorId}
            name={currentTierListData.name}
            mode={currentTierListData.mode}
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
