import { AsyncNoteData } from '@/types';

export const initialNoteData: AsyncNoteData = {
  isLoading: true,
  isError: false,
  data: [],
};

export const noteReducer = (state: AsyncNoteData) => {
  return state;
};
