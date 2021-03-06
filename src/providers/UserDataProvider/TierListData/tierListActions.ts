import {
  TierListData,
  ChampionListData,
  ChampionListEntryData,
  TierListAction,
  TierListTemplate,
} from '@/types';
import { getTierListTemplate } from './initialTierListData';

const computeNewTierListId = (addendum?: string) => new Date().getTime().toString() + Math.random() + addendum;

export const fetchTierLists = (): TierListAction => ({
  type: 'FETCH_TIERLISTS',
});

export const pushTierLists = (): TierListAction => ({
  type: 'PUSH_TIERLISTS',
});

export const setTierLists = (tierLists: TierListData[]): TierListAction => ({
  type: 'SET_TIERLISTS',
  payload: {
    tierLists,
  },
});

export const addTierList = (
  authorId: string,
  data: Partial<TierListData>,
  tlTemplate?: TierListTemplate,
): TierListAction => {
  const tierListId = data.id || computeNewTierListId();
  const championLists = tlTemplate ? getTierListTemplate(tierListId, tlTemplate) : data.lists || [];
  return {
    type: 'ADD_TIERLIST',
    payload: {
      id: tierListId,
      authorId,
      name: data.name || '',
      mode: data.mode || null,
      role: data.role || null,
      isPublic: data.isPublic || false,
      isRemovable: data.isRemovable || true,
      order: data.order || 0,
      lists: championLists,
    },
  };
};

export const updateTierList = (id: string, data: Partial<TierListData>): TierListAction => ({
  type: 'UPDATE_TIERLIST',
  payload: {
    id,
    ...data,
  },
});

export const deleteTierList = (id: string): TierListAction => ({
  type: 'DELETE_TIERLIST',
  payload: {
    id,
  },
});

export const addChampionList = (
  tierListId: string,
  data: Partial<ChampionListData>,
): TierListAction => ({
  type: 'ADD_CHAMPIONLIST',
  payload: {
    tierListId,
    id: data.id || computeNewTierListId(),
    name: data.name || 'My new list',
    order: data.order || 0,
    description: data.description || '',
    entries: data.entries || [],
  },
});

export const updateChampionList = (id: string, data: Partial<ChampionListData>): TierListAction => ({
  type: 'UPDATE_CHAMPIONLIST',
  payload: {
    id,
    ...data,
  },
});

export const clearChampionList = (id: string): TierListAction => ({
  type: 'CLEAR_CHAMPIONLIST',
  payload: {
    id,
  },
});

export const deleteChampionList = (id: string): TierListAction => ({
  type: 'DELETE_CHAMPIONLIST',
  payload: {
    id,
  },
});

export const addChampionListEntry = (
  tierListId: string,
  championListId: string,
  data: Partial<ChampionListEntryData>,
): TierListAction => ({
  type: 'ADD_CHAMPIONLISTENTRY',
  payload: {
    tierListId,
    championListId,
    id: data.id || computeNewTierListId(),
    championId: data.championId || '',
    note: data.note || null,
  },
});

export const updateChampionListEntry = (
  id: string,
  data: Partial<ChampionListEntryData>,
): TierListAction => ({
  type: 'UPDATE_CHAMPIONLISTENTRY',
  payload: {
    id,
    ...data,
  },
});

export const moveChampionListEntry = (
  id: string,
  tierListId: string,
  championListId: string,
): TierListAction => ({
  type: 'MOVE_CHAMPIONLISTENTRY',
  payload: {
    id,
    tierListId,
    championListId,
  },
});

export const deleteChampionListEntry = (id: string): TierListAction => ({
  type: 'DELETE_CHAMPIONLISTENTRY',
  payload: {
    id,
  },
});
