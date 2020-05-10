import { AsyncUserData } from './userData';

export type NoteData = {
  [id: string]: {
    id: string;
    datetime: string;
    text: string;
  };
};

export type AsyncNoteData = AsyncUserData<NoteData>;

export type NoteAction = 'FETCH_NOTES';
