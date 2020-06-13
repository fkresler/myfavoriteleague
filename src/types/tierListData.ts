import { AsyncUserData } from './userData';

export enum DnDTierListTypes {
  ChampionElement = 'ChampionElement',
}

export type DnDChampionEntryItem = ChampionEntryData & {
  type: DnDTierListTypes;
};

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

export type IChampionEntry = ChampionEntryData & {
  updateChampionEntry: (championEntryId: string, note: string) => void;
  deleteChampionEntry: (championEntryId: string) => void;
};

export type IChampionList = ChampionListData & {
  updateChampionList: (
    championListId: string,
    name: string,
    description: string,
    order: number,
    entries: ChampionEntryData[],
  ) => void;
  deleteChampionList: (championListId: string) => void;
  addChampionEntry: (championListId: string, championId: string, note: string) => void;
  updateChampionEntry: (championListId: string, championEntryId: string, note: string) => void;
  moveChampionEntry: (championListId: string, championEntryId: string) => void;
  deleteChampionEntry: (championListId: string, championEntryId: string) => void;
};

export type ITierList = TierListData & {
  dispatch: (action: TierListAction) => void;
};

export type AsyncTierListData = AsyncUserData<TierListData[]>;

export type TierListAction =
  | IFetchTierListsAction
  | IPushTierListsAction
  | ISetTierListsAction
  | IAddTierListAction
  | IUpdateTierListAction
  | IDeleteTierListAction
  | ICreateChampionListAction
  | IUpdateChampionListAction
  | IDeleteChampionListAction
  | IAddChampionEntryAction
  | IUpdateChampionEntryAction
  | IMoveChampionEntryAction
  | IDeleteChampionEntryAction;

export type IFetchTierListsAction = {
  type: 'FETCH_TIERLISTS';
};

export type IPushTierListsAction = {
  type: 'PUSH_TIERLISTS';
};

export type ISetTierListsAction = {
  type: 'SET_TIERLISTS';
  payload: {
    tierLists: TierListData[];
  };
};

export type IAddTierListAction = {
  type: 'ADD_TIERLIST';
  payload: {
    tierListId: string;
    authorId: string;
    name: string;
    order: number;
    lists: ChampionListData[];
  };
};

export type IUpdateTierListAction = {
  type: 'UPDATE_TIERLIST';
  payload: {
    tierListId: string;
    name?: string;
    order?: number;
  };
};

export type IDeleteTierListAction = {
  type: 'DELETE_TIERLIST';
  payload: {
    tierListId: string;
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

export type IUpdateChampionListAction = {
  type: 'UPDATE_CHAMPIONLIST';
  payload: {
    tierListId: string;
    championListId: string;
    name?: string;
    description?: string;
    order?: number;
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
    note?: string;
  };
};

export type IMoveChampionEntryAction = {
  type: 'MOVE_CHAMPIONENTRY';
  payload: {
    tierListId: string;
    championListId: string;
    championEntryId: string;
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
