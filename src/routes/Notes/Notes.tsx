import React from 'react';
import { Button } from '@/components/Button';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserDataContext, noteActions } from '@/providers/UserDataProvider';
import { Modal } from '@/components/Modal';
import { Note, NoteForm } from '@/components/Note';

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

  const AddNoteModalButton: React.ReactNode = (
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
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Something odd happened oof</div>;
  }

  if (data.length === 0) {
    return (
      <>
        <div>You do not have any notes yet, create some with the button below!</div>
        {AddNoteModalButton}
      </>
    );
  }

  return (
    <>
      {SaveNotesButton}
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
      {AddNoteModalButton}
    </>
  );
};

export default Notes;
