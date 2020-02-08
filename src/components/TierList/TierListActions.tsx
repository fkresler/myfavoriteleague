import { IChampionEntryData } from '@/types/tierLists';

export type TierListAction =
  | IUpdateTierListInfoAction
  | ICreateChampionListAction
  | IUpdateChampionListInfoAction
  | IDeleteChampionListAction
  | IAddChampionEntryAction
  | IUpdateChampionEntryAction
  | IDeleteChampionEntryAction;

export type IUpdateTierListInfoAction = {
  type: 'UPDATE_TIERLIST_INFO';
  payload: {
    name: string;
    order: number;
  };
};

export const updateTierListInfo = (name: string, order: number): TierListAction => {
  return {
    type: 'UPDATE_TIERLIST_INFO',
    payload: {
      name,
      order,
    },
  };
};

export type ICreateChampionListAction = {
  type: 'CREATE_CHAMPIONLIST';
  payload: {
    championListId: string;
    name: string;
    description: string;
    order: number;
    entries: IChampionEntryData[];
  };
};

export const createChampionList = (
  name: string = 'New List',
  description: string,
  order: number = 0,
): TierListAction => {
  return {
    type: 'CREATE_CHAMPIONLIST',
    payload: {
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
    championListId: string;
    name: string;
    description: string;
    order: number;
  };
};

export const updateChampionListInfo = (
  championListId: string,
  name: string,
  description: string,
  order: number,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONLIST_INFO',
    payload: {
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
    championListId: string;
  };
};

export const deleteChampionList = (championListId: string): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONLIST',
    payload: {
      championListId,
    },
  };
};

export type IAddChampionEntryAction = {
  type: 'ADD_CHAMPIONENTRY';
  payload: {
    championEntryId: string;
    championListId: string;
    championId: string;
    note: string;
  };
};

export const addChampionEntry = (
  championListId: string,
  championId: string,
  note: string,
): TierListAction => {
  return {
    type: 'ADD_CHAMPIONENTRY',
    payload: {
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
    championEntryId: string;
    championListId: string;
    note: string;
  };
};

export const updateChampionEntry = (
  championListId: string,
  championEntryId: string,
  note: string,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONENTRY',
    payload: {
      championEntryId,
      championListId,
      note,
    },
  };
};

export type IDeleteChampionEntryAction = {
  type: 'DELETE_CHAMPIONENTRY';
  payload: {
    championListId: string;
    championEntryId: string;
  };
};

export const deleteChampionEntry = (
  championListId: string,
  championEntryId: string,
): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONENTRY',
    payload: {
      championListId,
      championEntryId,
    },
  };
};
