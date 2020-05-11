import { TierListAction } from '@/types';

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
