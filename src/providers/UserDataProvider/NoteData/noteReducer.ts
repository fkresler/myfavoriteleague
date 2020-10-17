import { NoteData, NoteAction } from '@/types';

export const noteReducer = (state: NoteData[], action: NoteAction): NoteData[] => {
  switch (action.type) {
    case 'SET_NOTES': {
      const { notes } = action.payload;
      return [...notes];
    }
    case 'ADD_NOTE': {
      const newNote: NoteData = { ...action.payload };
      return [...state, newNote];
    }
    case 'UPDATE_NOTE': {
      const { id, text, title } = action.payload;
      const newNoteState = state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...(text && { text }),
            ...(title && { title }),
          };
        }
        return { ...note };
      });
      return newNoteState;
    }
    case 'DELETE_NOTE': {
      const { id } = action.payload;
      const newNoteState = state.filter((note) => note.id !== id);
      return newNoteState;
    }
    case 'ADD_TAG': {
      const { id, tag } = action.payload;
      const newNoteState = state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            tags: [...note.tags, tag],
          };
        }
        return { ...note };
      });
      return newNoteState;
    }
    case 'REMOVE_TAG': {
      const { id, tag } = action.payload;
      const newNoteState = state.map((note) => {
        if (note.id === id) {
          const newTagState = note.tags.filter((noteTag) => noteTag !== tag);
          return {
            ...note,
            tags: newTagState,
          };
        }
        return { ...note };
      });
      return newNoteState;
    }
    case 'SET_TAGS': {
      const { id, tags } = action.payload;
      const newNoteState = state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            tags,
          };
        }
        return { ...note };
      });
      return newNoteState;
    }
    case 'CLEAR_TAGS': {
      const { id } = action.payload;
      const newNoteState = state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            tags: [],
          };
        }
        return { ...note };
      });
      return newNoteState;
    }
    default:
      return [...state];
  }
};

export default noteReducer;
