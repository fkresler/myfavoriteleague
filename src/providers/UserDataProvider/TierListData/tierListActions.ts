import { TierListData, ChampionListData, TierListAction, ChampionEntryData } from '@/types';

export const fetchTierLists = (): TierListAction => {
  return {
    type: 'FETCH_TIERLISTS',
  };
};

export const pushTierLists = (): TierListAction => {
  return {
    type: 'PUSH_TIERLISTS',
  };
};

export const setTierLists = (tierLists: TierListData[]): TierListAction => {
  return {
    type: 'SET_TIERLISTS',
    payload: {
      tierLists,
    },
  };
};

export const addTierList = (
  authorId: string,
  name: string = '',
  order: number = 0,
  lists: ChampionListData[] = [],
): TierListAction => {
  return {
    type: 'ADD_TIERLIST',
    payload: {
      tierListId: new Date().getTime().toString() + Math.random(),
      authorId,
      name,
      order,
      lists,
    },
  };
};

export const updateTierList = (
  tierListId: string,
  name?: string,
  order?: number,
): TierListAction => {
  return {
    type: 'UPDATE_TIERLIST',
    payload: {
      tierListId,
      name,
      order,
    },
  };
};

export const deleteTierList = (tierListId: string): TierListAction => {
  return {
    type: 'DELETE_TIERLIST',
    payload: {
      tierListId,
    },
  };
};

export const createChampionList = (
  tierListId: string,
  name: string = 'New List',
  description: string = '',
  order: number = 0,
  entries: ChampionEntryData[] = [],
): TierListAction => {
  return {
    type: 'CREATE_CHAMPIONLIST',
    payload: {
      tierListId,
      championListId: new Date().getTime().toString() + Math.random(),
      name,
      description,
      order,
      entries,
    },
  };
};

export const updateChampionList = (
  tierListId: string,
  championListId: string,
  name?: string,
  description?: string,
  order?: number,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONLIST',
    payload: {
      tierListId,
      championListId,
      name,
      description,
      order,
    },
  };
};

export const deleteChampionList = (tierListId: string, championListId: string): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONLIST',
    payload: {
      tierListId,
      championListId,
    },
  };
};

export const addChampionEntry = (
  tierListId: string,
  championListId: string,
  championId: string,
  note: string = '',
): TierListAction => {
  return {
    type: 'ADD_CHAMPIONENTRY',
    payload: {
      tierListId,
      championEntryId: new Date().getTime().toString() + Math.random(),
      championListId,
      championId,
      note,
    },
  };
};

export const updateChampionEntry = (
  tierListId: string,
  championListId: string,
  championEntryId: string,
  note?: string,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONENTRY',
    payload: {
      tierListId,
      championEntryId,
      championListId,
      note,
    },
  };
};

export const deleteChampionEntry = (
  tierListId: string,
  championListId: string,
  championEntryId: string,
): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONENTRY',
    payload: {
      tierListId,
      championListId,
      championEntryId,
    },
  };
};
