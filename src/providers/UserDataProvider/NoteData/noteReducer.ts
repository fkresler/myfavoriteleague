import { AsyncNoteData } from '@/types';

export const initialNoteData: AsyncNoteData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: [],
};

export const noteReducer = (state: AsyncNoteData) => {
  return state;
};
