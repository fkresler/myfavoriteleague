import { AsyncUserData } from './userData';

export type ChampionEntryData = {
  championEntryId: string;
  championId: string;
  note: string;
};

export type ChampionListData = {
  championListId: string;
  order: number;
  name: string;
  description: string;
  entries: ChampionEntryData[];
};

export type TierListData = {
  tierListId: string;
  authorId: string;
  name: string;
  order: number;
  lists: ChampionListData[];
};

export type AsyncTierListData = AsyncUserData<TierListData>;

export type TierListAction =
  | IFetchTierListsAction
  | IPushTierListsAction
  | IDeleteTierListAction
  | ISetTierListsAction
  | ISetTierListInfoAction
  | IUpdateTierListInfoAction
  | ICreateChampionListAction
  | IUpdateChampionListInfoAction
  | IDeleteChampionListAction
  | IAddChampionEntryAction
  | IUpdateChampionEntryAction
  | IDeleteChampionEntryAction;

export type IFetchTierListsAction = {
  type: 'FETCH_TIERLISTS';
};

export type IPushTierListsAction = {
  type: 'PUSH_TIERLISTS';
};

export type IDeleteTierListAction = {
  type: 'DELETE_TIERLIST';
  payload: {
    tierListId: string;
  };
};

export type ISetTierListsAction = {
  type: 'SET_TIERLISTS';
  payload: {
    tierLists: TierListData[];
  };
};

export type ISetTierListInfoAction = {
  type: 'SET_TIERLIST_INFO';
  payload: {
    tierListId: string;
    authorId: string;
    name: string;
    order: number;
    lists: ChampionListData[];
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

export type ICreateChampionListAction = {
  type: 'CREATE_CHAMPIONLIST';
  payload: {
    tierListId: string;
    championListId: string;
    name: string;
    description: string;
    order: number;
    entries: ChampionEntryData[];
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

export type IDeleteChampionListAction = {
  type: 'DELETE_CHAMPIONLIST';
  payload: {
    tierListId: string;
    championListId: string;
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

export type IUpdateChampionEntryAction = {
  type: 'UPDATE_CHAMPIONENTRY';
  payload: {
    tierListId: string;
    championEntryId: string;
    championListId: string;
    note: string;
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
