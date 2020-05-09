import { IChampionEntryData, IChampionListData, ITierListData } from '@/types/tierLists';

export type TierListAction =
  | ISetTierListsAction
  | ISetTierListInfoAction
  | IUpdateTierListInfoAction
  | ICreateChampionListAction
  | IUpdateChampionListInfoAction
  | IDeleteChampionListAction
  | IAddChampionEntryAction
  | IUpdateChampionEntryAction
  | IDeleteChampionEntryAction;

export type ISetTierListsAction = {
  type: 'SET_TIERLISTS';
  payload: {
    tierLists: ITierListData[];
  };
};

export const setTierLists = (tierLists: ITierListData[]): TierListAction => {
  return {
    type: 'SET_TIERLISTS',
    payload: {
      tierLists,
    },
  };
};

export type ISetTierListInfoAction = {
  type: 'SET_TIERLIST_INFO';
  payload: {
    tierListId: string;
    authorId: string;
    name: string;
    order: number;
    lists: IChampionListData[];
  };
};

export const setTierListInfo = (
  tierListId: string,
  authorId: string,
  name: string,
  order: number,
  lists: IChampionListData[],
): TierListAction => {
  return {
    type: 'SET_TIERLIST_INFO',
    payload: {
      tierListId,
      authorId,
      name,
      order,
      lists,
    },
  };
};

export type IUpdateTierListInfoAction = {
  type: 'UPDATE_TIERLIST_INFO';
  payload: {
    tierListId: string;
    name: string;
    order: number;
  };
};

export const updateTierListInfo = (
  tierListId: string,
  name: string,
  order: number,
): TierListAction => {
  return {
    type: 'UPDATE_TIERLIST_INFO',
    payload: {
      tierListId,
      name,
      order,
    },
  };
};

export type ICreateChampionListAction = {
  type: 'CREATE_CHAMPIONLIST';
  payload: {
    tierListId: string;
    championListId: string;
    name: string;
    description: string;
    order: number;
    entries: IChampionEntryData[];
  };
};

export const createChampionList = (
  tierListId: string,
  name: string = 'New List',
  description: string,
  order: number = 0,
): TierListAction => {
  return {
    type: 'CREATE_CHAMPIONLIST',
    payload: {
      tierListId,
      championListId: new Date().getTime().toString() + Math.random(),
      name,
      description,
      order,
      entries: [],
    },
  };
};

export type IUpdateChampionListInfoAction = {
  type: 'UPDATE_CHAMPIONLIST_INFO';
  payload: {
    tierListId: string;
    championListId: string;
    name: string;
    description: string;
    order: number;
  };
};

export const updateChampionListInfo = (
  tierListId: string,
  championListId: string,
  name: string,
  description: string,
  order: number,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONLIST_INFO',
    payload: {
      tierListId,
      championListId,
      name,
      description,
      order,
    },
  };
};

export type IDeleteChampionListAction = {
  type: 'DELETE_CHAMPIONLIST';
  payload: {
    tierListId: string;
    championListId: string;
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

export type IAddChampionEntryAction = {
  type: 'ADD_CHAMPIONENTRY';
  payload: {
    tierListId: string;
    championEntryId: string;
    championListId: string;
    championId: string;
    note: string;
  };
};

export const addChampionEntry = (
  tierListId: string,
  championListId: string,
  championId: string,
  note: string,
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

export type IUpdateChampionEntryAction = {
  type: 'UPDATE_CHAMPIONENTRY';
  payload: {
    tierListId: string;
    championEntryId: string;
    championListId: string;
    note: string;
  };
};

export const updateChampionEntry = (
  tierListId: string,
  championListId: string,
  championEntryId: string,
  note: string,
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

export type IDeleteChampionEntryAction = {
  type: 'DELETE_CHAMPIONENTRY';
  payload: {
    tierListId: string;
    championListId: string;
    championEntryId: string;
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
