import { TierListData, ChampionListData, ChampionListEntryData, TierListAction } from '@/types';

const computeNewTierListId = (addendum?: string) => {
  return new Date().getTime().toString() + Math.random() + addendum;
};

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
  name: string,
  data: Partial<TierListData>,
): TierListAction => {
  return {
    type: 'ADD_TIERLIST',
    payload: {
      id: data.id || computeNewTierListId(),
      authorId,
      name,
      role: data.role || null,
      isPublic: data.isPublic || false,
      isRemovable: data.isRemovable || true,
      order: data.order || 0,
      lists: data.lists || [],
    },
  };
};

export const updateTierList = (id: string, data: Partial<TierListData>): TierListAction => {
  return {
    type: 'UPDATE_TIERLIST',
    payload: {
      id,
      ...{ data },
    },
  };
};

export const deleteTierList = (id: string): TierListAction => {
  return {
    type: 'DELETE_TIERLIST',
    payload: {
      id,
    },
  };
};

export const addChampionList = (
  tierListId: string,
  data: Partial<ChampionListData>,
): TierListAction => {
  return {
    type: 'ADD_CHAMPIONLIST',
    payload: {
      tierListId,
      id: data.id || computeNewTierListId(),
      name: data.name || 'My new list',
      order: data.order || 0,
      description: data.description || '',
      entries: data.entries || [],
    },
  };
};

export const updateChampionList = (id: string, data: Partial<ChampionListData>): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONLIST',
    payload: {
      id,
      ...{ data },
    },
  };
};

export const deleteChampionList = (id: string): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONLIST',
    payload: {
      id,
    },
  };
};

export const addChampionListEntry = (
  tierListId: string,
  championListId: string,
  championId: string,
  data: Partial<ChampionListEntryData>,
): TierListAction => {
  return {
    type: 'ADD_CHAMPIONLISTENTRY',
    payload: {
      tierListId,
      championListId,
      championId,
      id: data.id || computeNewTierListId(),
      note: data.note || null,
    },
  };
};

export const updateChampionListEntry = (
  id: string,
  data: Partial<ChampionListEntryData>,
): TierListAction => {
  return {
    type: 'UPDATE_CHAMPIONLISTENTRY',
    payload: {
      id,
      ...{ data },
    },
  };
};

export const moveChampionListEntry = (
  id: string,
  tierListId: string,
  championListId: string,
): TierListAction => {
  return {
    type: 'MOVE_CHAMPIONLISTENTRY',
    payload: {
      id,
      tierListId,
      championListId,
    },
  };
};

export const deleteChampionListEntry = (id: string): TierListAction => {
  return {
    type: 'DELETE_CHAMPIONLISTENTRY',
    payload: {
      id,
    },
  };
};
