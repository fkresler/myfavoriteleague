import { NoteAction, NoteData } from '@/types';

export const fetchNotes = (): NoteAction => {
  return {
    type: 'FETCH_NOTES',
  };
};

export const pushNotes = (): NoteAction => {
  return {
    type: 'PUSH_NOTES',
  };
};

export const setNotes = (notes: NoteData[]): NoteAction => {
  return {
    type: 'SET_NOTES',
    payload: {
      notes,
    },
  };
};

export const addNote = ({ text = '', tags = [], title }: Partial<NoteData>): NoteAction => {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: new Date().getTime().toString() + Math.random(),
      datetime: new Date().toString(),
      title,
      text,
      tags,
    },
  };
};

export const updateNote = (id: string, { text, title }: Partial<NoteData>): NoteAction => {
  return {
    type: 'UPDATE_NOTE',
    payload: {
      id,
      text,
      title,
    },
  };
};

export const deleteNote = (id: string) => {
  return {
    type: 'DELETE_NOTE',
    payload: {
      id,
    },
  };
};

export const addNoteTag = (id: string, tag: string): NoteAction => {
  return {
    type: 'ADD_TAG',
    payload: {
      id,
      tag,
    },
  };
};

export const removeNoteTag = (id: string, tag: string): NoteAction => {
  return {
    type: 'REMOVE_TAG',
    payload: {
      id,
      tag,
    },
  };
};

export const clearNoteTags = (id: string): NoteAction => {
  return {
    type: 'CLEAR_TAGS',
    payload: {
      id,
    },
  };
};
