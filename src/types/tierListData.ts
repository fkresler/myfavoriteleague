import { AsyncUserData } from './userData';
import { GameMode, PositionalRole } from './league';

export enum DnDTierListTypes {
  ChampionElement = 'ChampionElement',
  OrderedChampionListElement = 'ChampionListElement',
}

export type DnDTierListItemData<T> = T & {
  type: DnDTierListTypes;
};

export enum TierListTemplate {
  GENERAL = 'General (Default)',
  TRUETIERLIST = 'Tierlist',
  FOCUS = 'Focus',
  EMPTY = 'Empty',
}

export type ChampionListEntryData = {
  id: string;
  championId: string;
  note: string | null;
};

export type ChampionListData = {
  id: string;
  name: string;
  order: number;
  description: string;
  entries: ChampionListEntryData[];
};

export type TierListData = {
  id: string;
  authorId: string;
  name: string;
  mode: GameMode | null;
  role: PositionalRole | null;
  isPublic: boolean;
  isRemovable: boolean;
  order: number;
  lists: ChampionListData[];
};

export type AsyncTierListData = AsyncUserData<TierListData[]>;

export type TierListAction =
  | IFetchTierListsAction
  | IPushTierListsAction
  | ISetTierListsAction
  | IAddTierListAction
  | IUpdateTierListAction
  | IDeleteTierListAction
  | IAddChampionListAction
  | IUpdateChampionListAction
  | IClearChampionListAction
  | IDeleteChampionListAction
  | IAddChampionListEntryAction
  | IUpdateChampionListEntryAction
  | IMoveChampionListEntryAction
  | IDeleteChampionListEntryAction;

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
  payload: TierListData;
};

export type IUpdateTierListAction = {
  type: 'UPDATE_TIERLIST';
  payload: Partial<TierListData> & {
    id: string;
  };
};

export type IDeleteTierListAction = {
  type: 'DELETE_TIERLIST';
  payload: {
    id: string;
  };
};

export type IAddChampionListAction = {
  type: 'ADD_CHAMPIONLIST';
  payload: ChampionListData & {
    tierListId: string;
  };
};

export type IUpdateChampionListAction = {
  type: 'UPDATE_CHAMPIONLIST';
  payload: Partial<ChampionListData> & {
    id: string;
  };
};

export type IClearChampionListAction = {
  type: 'CLEAR_CHAMPIONLIST';
  payload: {
    id: string;
  };
};

export type IDeleteChampionListAction = {
  type: 'DELETE_CHAMPIONLIST';
  payload: {
    id: string;
  };
};

export type IAddChampionListEntryAction = {
  type: 'ADD_CHAMPIONLISTENTRY';
  payload: ChampionListEntryData & {
    tierListId: string;
    championListId: string;
  };
};

export type IUpdateChampionListEntryAction = {
  type: 'UPDATE_CHAMPIONLISTENTRY';
  payload: Partial<ChampionListEntryData> & {
    id: string;
  };
};

export type IMoveChampionListEntryAction = {
  type: 'MOVE_CHAMPIONLISTENTRY';
  payload: {
    id: string;
    tierListId: string;
    championListId: string;
  };
};

export type IDeleteChampionListEntryAction = {
  type: 'DELETE_CHAMPIONLISTENTRY';
  payload: {
    id: string;
  };
};
