import { ITierListData } from '@/types/tierLists';
import { TierListAction } from './TierListActions';

const tierListReducer = (state: ITierListData[], action: TierListAction): ITierListData[] => {
  switch (action.type) {
    case 'SET_TIERLISTS': {
      const { tierLists } = action.payload;
      return [...tierLists];
    }
    case 'SET_TIERLIST_INFO': {
      const { tierListId, authorId, name, order, lists } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          return {
            tierListId,
            authorId,
            name,
            order,
            lists,
          };
        }
        return { ...tierList };
      });
      return [...newTierListState];
    }
    case 'UPDATE_TIERLIST_INFO': {
      const { tierListId, name, order } = action.payload;
      return {
        ...state,
        name,
        order,
      };
    }
    case 'CREATE_CHAMPIONLIST': {
      const { tierListId, championListId, name, description, order, entries } = action.payload;
      const newChampionList = {
        championListId,
        name,
        description,
        order,
        entries: [...entries],
      };
      const newChampionListsArray = state.lists
        ? state.lists.concat(newChampionList)
        : [newChampionList];
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    case 'UPDATE_CHAMPIONLIST_INFO': {
      const { tierListId, championListId, name, description, order } = action.payload;
      const championListsArray = state.lists ? state.lists : [];
      const newChampionListsArray = championListsArray.map((item) => {
        if (item.championListId === championListId) {
          return { ...item };
        }
        return {
          ...item,
          name,
          description,
          order,
        };
      });
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    case 'DELETE_CHAMPIONLIST': {
      const { tierListId, championListId } = action.payload;
      const championListsArray = state.lists ? state.lists : [];
      const newChampionListsArray = championListsArray.filter(
        (item) => item.championListId !== championListId,
      );
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    case 'ADD_CHAMPIONENTRY': {
      const { tierListId, championEntryId, championListId, championId, note } = action.payload;
      const newChampionEntry = {
        championEntryId,
        championListId,
        championId,
        note,
      };
      const championListsArray = state.lists ? state.lists : [];
      const newChampionListsArray = championListsArray.map((item) => {
        if (item.championListId === championListId) {
          return {
            ...item,
            entries: item.entries.concat(newChampionEntry),
          };
        }
        return { ...item };
      });
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    case 'UPDATE_CHAMPIONENTRY': {
      const { tierListId, championEntryId, championListId, note } = action.payload;
      const championListsArray = state.lists ? state.lists : [];
      const newChampionListsArray = championListsArray.map((item) => {
        if (item.championListId === championListId) {
          const newEntriesArray = item.entries.map((entriesItem) => {
            if (entriesItem.championEntryId === championEntryId) {
              return {
                ...entriesItem,
                note,
              };
            }
            return { ...entriesItem };
          });
          return {
            ...item,
            entries: newEntriesArray,
          };
        }
        return { ...item };
      });
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    case 'DELETE_CHAMPIONENTRY': {
      const { tierListId, championListId, championEntryId } = action.payload;
      const championListsArray = state.lists ? state.lists : [];
      const newChampionListsArray = championListsArray.map((item) => {
        if (item.championListId === championListId) {
          const newEntriesArray = item.entries.filter(
            (entriesItem) => entriesItem.championEntryId !== championEntryId,
          );
          return {
            ...item,
            entries: newEntriesArray,
          };
        }
        return {
          ...item,
        };
      });
      return {
        ...state,
        lists: newChampionListsArray,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default tierListReducer;