import React from 'react';
import { Button } from '@blueprintjs/core';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserDataContext, noteActions } from '@/providers/UserDataProvider';
import Note from '@/components/Note';
import NoteModal from '@/components/NoteModal';
import { NoteData } from '@/types';

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
  }, [authUser]);

  const NotesLoading: JSX.Element = <div>Loading ...</div>;

  const NotesError: JSX.Element = <div>Something odd happened oof</div>;

  const AddNoteModal: JSX.Element = (
    <>
      <NoteModal
        isOpen={isAddNoteModalOpen}
        onConfirm={(noteData: Partial<NoteData>) => {
          dispatch(noteActions.addNote(noteData));
          setIsAddNoteModalOpen(false);
        }}
        onClose={() => setIsAddNoteModalOpen(false)}
      />
      <Button intent="success" onClick={() => setIsAddNoteModalOpen(true)}>
        +
      </Button>
    </>
  );

  const SaveNotesButton: JSX.Element = (
    <Button intent="success" onClick={() => dispatch(noteActions.pushNotes())}>
      Save Notes
    </Button>
  );

  if (isLoading) {
    return NotesLoading;
  }

  if (isError) {
    return NotesError;
  }

  return (
    <>
      {SaveNotesButton}
      <div>Your notes:</div>
      {data.map((note) => (
        <Note data={{ ...note, dispatch }} />
      ))}
      {AddNoteModal}
    </>
  );
};

export default Notes;
