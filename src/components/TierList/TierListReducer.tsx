import { ITierListData } from '@/types/tierLists';
import { TierListAction } from '@/components/TierList/TierListActions';

const tierListReducer = (state: ITierListData, action: TierListAction) => {
  switch (action.type) {
    case 'UPDATE_TIERLIST_INFO': {
      return { ...state };
    }
    case 'CREATE_CHAMPIONLIST': {
      return { ...state };
    }
    case 'UPDATE_CHAMPIONLIST_INFO': {
      return { ...state };
    }
    case 'DELETE_CHAMPIONLIST': {
      return { ...state };
    }
    case 'ADD_CHAMPIONENTRY': {
      return { ...state };
    }
    case 'UPDATE_CHAMPIONENTRY': {
      return { ...state };
    }
    case 'DELETE_CHAMPIONENTRY': {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default tierListReducer;
