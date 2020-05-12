import { AsyncUserData } from './userData';

export type NoteData = {
  id: string;
  datetime: string;
  title?: string;
  text: string;
  tags: string[];
};

export type INote = NoteData & {
  dispatch: (action: NoteAction) => void;
};

export type AsyncNoteData = AsyncUserData<NoteData[]>;

export type NoteAction =
  | IFetchNotesAction
  | IPushNotesAction
  | ISetNotesAction
  | IAddNoteAction
  | IUpdateNoteAction
  | IDeleteNoteAction
  | IAddNoteTagAction
  | IRemoveNoteTagAction
  | ISetNoteTagsAction
  | IClearNoteTagsAction;

export type IFetchNotesAction = {
  type: 'FETCH_NOTES';
};

export type IPushNotesAction = {
  type: 'PUSH_NOTES';
};

export type ISetNotesAction = {
  type: 'SET_NOTES';
  payload: {
    notes: NoteData[];
  };
};

export type IAddNoteAction = {
  type: 'ADD_NOTE';
  payload: {
    id: string;
    datetime: string;
    title?: string;
    text: string;
    tags: string[];
  };
};

export type IUpdateNoteAction = {
  type: 'UPDATE_NOTE';
  payload: {
    id: string;
    text?: string;
    title?: string;
  };
};

export type IDeleteNoteAction = {
  type: 'DELETE_NOTE';
  payload: {
    id: string;
  };
};

export type IAddNoteTagAction = {
  type: 'ADD_TAG';
  payload: {
    id: string;
    tag: string;
  };
};

export type IRemoveNoteTagAction = {
  type: 'REMOVE_TAG';
  payload: {
    id: string;
    tag: string;
  };
};

export type ISetNoteTagsAction = {
  type: 'SET_TAGS';
  payload: {
    id: string;
    tags: string[];
  };
};

export type IClearNoteTagsAction = {
  type: 'CLEAR_TAGS';
  payload: {
    id: string;
  };
};
