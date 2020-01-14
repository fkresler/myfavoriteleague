import React from 'react';
import useAuthentication from '@/hooks/useAuthentication';
import useTierLists from '@/hooks/useTierLists';

const ChampionListApp: React.FC = () => {
  const currentUser = useAuthentication();
  const {
    methods: { createTierList, updateTierList, deleteTierList },
    loading,
    error,
    tierlists,
  } = useTierLists(currentUser);

  const loadingContent = <div>Loading ...</div>;

  const errorContent = <div>Error on reading tierlist data!</div>;

  return (
    <>
      {loading && loadingContent}
      {error && errorContent}
      {currentUser && (
        <button type="button" onClick={() => createTierList(currentUser.uid, 'Testname', 0)}>
          Create Test!
        </button>
      )}
      {tierlists.map((tierlist) => (
        <>
          <div>Tierlist: {tierlist.name}</div>
          <div>Author: {tierlist.authorId}</div>
        </>
      ))}
    </>
  );
};

export default ChampionListApp;
