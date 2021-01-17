import React from 'react';
import styled from 'styled-components';
import { Loader } from '@/components/Loader';
import { Notification } from '@/components/Notification';
import { Button } from '@/components/Button';
import { TierList, TierListModal } from '@/containers/TierList';
import { SegmentedSelect } from '@/components/Form';
import { UserDataContext, tierListActions } from '@/providers/UserDataProvider';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { FaPlus } from 'react-icons/fa';

const ActionBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

const TierLists: React.FC<{}> = () => {
  const { authUser } = React.useContext(FirebaseContext);
  const { tierlists } = React.useContext(UserDataContext);
  const {
    state: { hasLoaded, hasChanged, isLoading, isError, data },
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

  React.useEffect(() => {
    const hintUnsavedData = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      if (hasChanged) {
        e.returnValue = true;
      }
    };
    window.addEventListener('beforeunload', hintUnsavedData);
    return () => {
      window.removeEventListener('beforeunload', hintUnsavedData);
    };
  }, [hasChanged]);

  const NewTierList: React.ReactNode = (
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
      <Button variant="constructive" icon={<FaPlus />} onClick={() => setTierListModalOpen(true)} />
    </>
  );

  const SaveTierListsButton: React.ReactNode = (
    <Button
      variant="constructive"
      onClick={() => {
        dispatch(tierListActions.pushTierLists());
      }}
    >
      Save Tierlists
    </Button>
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Notification variant="error">
        Oops, omething went wrong! Please try again later.
      </Notification>
    );
  }

  if (!data || data.length === 0) {
    return (
      <>
        <Notification variant="warning">
          You have not created any lists yet. Go create some with the button!
        </Notification>
        <ActionBarWrapper>{NewTierList}</ActionBarWrapper>
      </>
    );
  }

  return (
    <>
      <ActionBarWrapper>
        {SaveTierListsButton}
        {NewTierList}
      </ActionBarWrapper>
      {data && (
        <SegmentedSelect
          choices={tierListSelectData}
          selectedId={selectedList}
          onChange={selectList}
        />
      )}
      {currentTierListData && (
        <TierList
          allowSingleUseEntriesOnly
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
};

export default TierLists;
