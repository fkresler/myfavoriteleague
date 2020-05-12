import React from 'react';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserDataContext, noteActions } from '@/providers/UserDataProvider';

const Notes: React.FC = () => {
  const { authUser } = React.useContext(FirebaseContext);
  const { notes } = React.useContext(UserDataContext);
  const {
    state: { hasLoaded, isLoading, isError, data },
    dispatch,
  } = notes;

  React.useEffect(() => {
    if (!hasLoaded) {
      dispatch(noteActions.fetchNotes());
    }
  }, [authUser]);

  const NotesLoading: JSX.Element = <div>Loading ...</div>;

  const NotesError: JSX.Element = <div>Something odd happened oof</div>;

  if (isLoading) {
    return NotesLoading;
  }

  if (isError) {
    return NotesError;
  }

  return <div>Here gonna be notes</div>;
};

export default Notes;
