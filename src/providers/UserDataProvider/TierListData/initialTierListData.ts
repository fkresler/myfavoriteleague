import { PositionalRole, AsyncTierListData, TierListData } from '@/types';

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
    role: PositionalRole.SUP,
    isPublic: false,
    isRemovable: false,
    order: 4,
    lists: [],
  },
];

export default initialAsyncTierListData;
