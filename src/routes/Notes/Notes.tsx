import React from 'react';
import { Button } from '@/components/Button';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserDataContext, noteActions } from '@/providers/UserDataProvider';
import { Note } from '@/components/Note';

const Notes: React.FC = () => {
  const { authUser } = React.useContext(FirebaseContext);
  const { notes } = React.useContext(UserDataContext);
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = React.useState<boolean>(false);
  const {
    state: { hasLoaded, isLoading, isError, data },
    dispatch,
  } = notes;

  React.useEffect(() => {
    if (!hasLoaded) {
      dispatch(noteActions.fetchNotes());
    }
  }, [authUser, dispatch, hasLoaded]);

  const NotesLoading: React.ReactNode = <div>Loading ...</div>;

  const NotesError: React.ReactNode = <div>Something odd happened oof</div>;

  const AddNoteModal: React.ReactNode = (
    <>
      <Button variant="constructive" onClick={() => setIsAddNoteModalOpen(true)}>
        +
      </Button>
    </>
  );

  const SaveNotesButton: React.ReactNode = (
    <Button variant="constructive" onClick={() => dispatch(noteActions.pushNotes())}>
      Save Notes
    </Button>
  );

  if (isLoading) {
    return <>{NotesLoading}</>;
  }

  if (isError) {
    return <>{NotesError}</>;
  }

  return (
    <>
      {SaveNotesButton}
      <div>Your notes:</div>
      {data.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          datetime={note.datetime}
          text={note.text}
          tags={note.tags}
          onDelete={() => {}}
        />
      ))}
      {AddNoteModal}
    </>
  );
};

export default Notes;
