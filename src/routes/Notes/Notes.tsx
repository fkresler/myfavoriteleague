import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/Button';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { UserDataContext, noteActions } from '@/providers/UserDataProvider';
import { Loader } from '@/components/Loader';
import { Notification } from '@/components/Notification';
import { Modal } from '@/components/Modal';
import { Note, NoteForm } from '@/components/Note';

const NoteActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
`;

const NoteListWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
`;

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

  const NewNote: React.ReactNode = (
    <>
      <Button
        variant="constructive"
        icon={<FaPlus />}
        onClick={() => setIsAddNoteModalOpen(true)}
      />
      <Modal
        isOpen={isAddNoteModalOpen}
        showClose
        onRequestClose={() => setIsAddNoteModalOpen(false)}
      >
        <NoteForm
          onSave={(newNoteData) => {
            dispatch(noteActions.addNote(newNoteData));
            setIsAddNoteModalOpen(false);
          }}
        />
      </Modal>
    </>
  );

  const SaveNotesButton: React.ReactNode = (
    <Button variant="constructive" onClick={() => dispatch(noteActions.pushNotes())}>
      Save Notes
    </Button>
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Notification variant="error">Something odd happened, try again later</Notification>;
  }

  if (!data || data.length === 0) {
    return (
      <>
        <Notification variant="warning">
          You do not have any notes yet. Create some with the button below!
        </Notification>
        <NoteActionWrapper>{NewNote}</NoteActionWrapper>
      </>
    );
  }

  return (
    <>
      <NoteActionWrapper>
        {SaveNotesButton}
        {NewNote}
      </NoteActionWrapper>
      <NoteListWrapper>
        {data.map((note) => (
          <Note
            id={note.id}
            key={note.id}
            title={note.title}
            datetime={note.datetime}
            text={note.text}
            tags={note.tags}
            onEdit={(newData) => dispatch(noteActions.updateNote(note.id, newData))}
            onDelete={() => {
              dispatch(noteActions.deleteNote(note.id));
            }}
          />
        ))}
      </NoteListWrapper>
    </>
  );
};

export default Notes;
