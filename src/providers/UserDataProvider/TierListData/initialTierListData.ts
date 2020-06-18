import { GameMode, PositionalRole, AsyncTierListData, TierListData } from '@/types';

export const initialAsyncTierListData: AsyncTierListData = {
  hasLoaded: false,
  isLoading: true,
  isError: false,
  data: [],
};

export const createDefaultTierListData = (authorId: string): TierListData[] => [
  {
    id: 'INITIALTOPLIST',
    authorId,
    name: 'Top',
    mode: GameMode.SR,
    role: PositionalRole.TOP,
    isPublic: false,
    isRemovable: false,
    order: 0,
    lists: [],
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
    lists: [],
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
    lists: [],
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
    lists: [],
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
    lists: [],
  },
];

export default initialAsyncTierListData;
