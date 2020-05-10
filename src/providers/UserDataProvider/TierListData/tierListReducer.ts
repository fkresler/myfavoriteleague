import { TierListData, TierListAction } from '@/types';

export const tierListReducer = (state: TierListData[], action: TierListAction): TierListData[] => {
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
            lists: [...lists],
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'UPDATE_TIERLIST_INFO': {
      const { tierListId, name, order } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          return {
            ...tierList,
            tierListId,
            name,
            order,
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'DELETE_TIERLIST': {
      const { tierListId } = action.payload;
      const newTierListState = state.filter((tierList) => tierList.tierListId !== tierListId);
      return newTierListState;
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
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const newChampionListsArray = tierList.lists
            ? tierList.lists.concat(newChampionList)
            : [newChampionList];
          return {
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'UPDATE_CHAMPIONLIST_INFO': {
      const { tierListId, championListId, name, description, order } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.map((item) => {
            if (item.championListId === championListId) {
              return {
                ...item,
                name,
                description,
                order,
              };
            }
            return {
              ...item,
            };
          });
          return {
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'DELETE_CHAMPIONLIST': {
      const { tierListId, championListId } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.filter(
            (item) => item.championListId !== championListId,
          );
          return {
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'ADD_CHAMPIONENTRY': {
      const { tierListId, championEntryId, championListId, championId, note } = action.payload;
      const newChampionEntry = {
        championEntryId,
        championListId,
        championId,
        note,
      };
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
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
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return {
          ...tierList,
        };
      });
      return newTierListState;
    }
    case 'UPDATE_CHAMPIONENTRY': {
      const { tierListId, championEntryId, championListId, note } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
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
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return {
          ...tierList,
        };
      });
      return newTierListState;
    }
    case 'DELETE_CHAMPIONENTRY': {
      const { tierListId, championListId, championEntryId } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
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
            ...tierList,
            lists: newChampionListsArray,
          };
        }
        return {
          ...tierList,
        };
      });
      return newTierListState;
    }
    default: {
      return { ...state };
    }
  }
};

export default tierListReducer;
