import {
  GameMode,
  PositionalRole,
  AsyncTierListData,
  TierListData,
  TierListTemplate,
  ChampionListData,
} from '@/types';

export const initialAsyncTierListData: AsyncTierListData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: [],
};

export const getGeneralTemplate = (tierListId: string): ChampionListData[] => [
  {
    id: `${tierListId}rankedtier`,
    name: 'Ranked Tier',
    order: 0,
    description: 'Champions I am confident with and that I can truly carry with',
    entries: [],
  },
  {
    id: `${tierListId}funtier`,
    name: 'Funny Tier',
    order: 1,
    description: 'Champions I play when I just want to have fun but I am not confident with',
    entries: [],
  },
  {
    id: `${tierListId}trialtier`,
    name: 'Trials Tier',
    order: 2,
    description: 'Champions I am looking forward to try',
    entries: [],
  },
];

export const getTrueTierListTemplate = (tierListId: string): ChampionListData[] => [
  {
    id: `${tierListId}optier`,
    name: 'OP-Tier',
    order: 0,
    description: 'Champions that are too strong for the time being',
    entries: [],
  },
  {
    id: `${tierListId}stier`,
    name: 'S-Tier',
    order: 1,
    description: 'Champions that are really really strong',
    entries: [],
  },
  {
    id: `${tierListId}atier`,
    name: 'A-Tier',
    order: 2,
    description: 'Good champions but worse than others',
    entries: [],
  },
  {
    id: `${tierListId}btier`,
    name: 'B-Tier',
    order: 3,
    description: 'Situationally good champions but not the best for grinding ranked',
    entries: [],
  },
];

export const getTierListTemplate = (
  tierListId: string,
  template?: TierListTemplate,
): ChampionListData[] => {
  switch (template) {
    case TierListTemplate.GENERAL:
      return getGeneralTemplate(tierListId);
    case TierListTemplate.TRUETIERLIST:
      return getTierListTemplate(tierListId);
    case TierListTemplate.EMPTY:
      return [];
    default:
      return getGeneralTemplate(tierListId);
  }
};

export const createDefaultTierListData = (
  authorId: string,
  template?: TierListTemplate,
): TierListData[] => [
  {
    id: 'INITIALTOPLIST',
    authorId,
    name: 'Top',
    mode: GameMode.SR,
    role: PositionalRole.TOP,
    isPublic: false,
    isRemovable: false,
    order: 0,
    lists: getTierListTemplate('INITIALTOPLIST', template),
  },
  {
    id: 'INITIALJNGLIST',
    authorId,
    name: 'Jungle',
    mode: GameMode.SR,
    role: PositionalRole.JNG,
    isPublic: false,
    isRemovable: false,
    order: 1,
    lists: getTierListTemplate('INITIALJNGLIST', template),
  },
  {
    id: 'INITIALMIDLIST',
    authorId,
    name: 'Mid',
    mode: GameMode.SR,
    role: PositionalRole.MID,
    isPublic: false,
    isRemovable: false,
    order: 2,
    lists: getTierListTemplate('INITIALMIDLIST', template),
  },
  {
    id: 'INITIALBOTLIST',
    authorId,
    name: 'Bottom',
    mode: GameMode.SR,
    role: PositionalRole.BOT,
    isPublic: false,
    isRemovable: false,
    order: 3,
    lists: getTierListTemplate('INITIALBOTLIST', template),
  },
  {
    id: 'INITIALSUPLIST',
    authorId,
    name: 'Support',
    mode: GameMode.SR,
    role: PositionalRole.SUP,
    isPublic: false,
    isRemovable: false,
    order: 4,
    lists: getTierListTemplate('INITIALSUPLIST', template),
  },
];

export default initialAsyncTierListData;
