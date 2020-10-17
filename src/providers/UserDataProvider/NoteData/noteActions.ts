import { NoteAction, NoteData } from '@/types';

export const fetchNotes = (): NoteAction => ({
  type: 'FETCH_NOTES',
});

export const pushNotes = (): NoteAction => ({
  type: 'PUSH_NOTES',
});

export const setNotes = (notes: NoteData[]): NoteAction => ({
  type: 'SET_NOTES',
  payload: {
    notes,
  },
});

export const addNote = ({ text = '', tags = [], title }: Partial<NoteData>): NoteAction => ({
  type: 'ADD_NOTE',
  payload: {
    id: new Date().getTime().toString() + Math.random(),
    datetime: new Date().toString(),
    title,
    text,
    tags,
  },
});

export const updateNote = (id: string, { text, title }: Partial<NoteData>): NoteAction => ({
  type: 'UPDATE_NOTE',
  payload: {
    id,
    text,
    title,
  },
});

export const deleteNote = (id: string): NoteAction => ({
  type: 'DELETE_NOTE',
  payload: {
    id,
  },
});

export const addNoteTag = (id: string, tag: string): NoteAction => ({
  type: 'ADD_TAG',
  payload: {
    id,
    tag,
  },
});

export const removeNoteTag = (id: string, tag: string): NoteAction => ({
  type: 'REMOVE_TAG',
  payload: {
    id,
    tag,
  },
});

export const setNoteTags = (id: string, tags: string[]): NoteAction => ({
  type: 'SET_TAGS',
  payload: {
    id,
    tags,
  },
});

export const clearNoteTags = (id: string): NoteAction => ({
  type: 'CLEAR_TAGS',
  payload: {
    id,
  },
});
