import { TierListData, TierListAction, ChampionListEntryData } from '@/types';

export const tierListReducer = (state: TierListData[], action: TierListAction): TierListData[] => {
  switch (action.type) {
    case 'SET_TIERLISTS': {
      const { tierLists } = action.payload;
      return [...tierLists];
    }
    case 'ADD_TIERLIST': {
      const newTierList = {
        ...action.payload,
      };
      return [...state, newTierList];
    }
    case 'UPDATE_TIERLIST': {
      const { id, name, role, isPublic, isRemovable, order } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.id === id) {
          return {
            ...tierList,
            ...(name && { name }),
            ...(role && { role }),
            ...(isPublic && { isPublic }),
            ...(isRemovable && { isRemovable }),
            ...(order && { order }),
          };
        }
        return { ...tierList };
      });
      return newTierListState;
    }
    case 'DELETE_TIERLIST': {
      const { id } = action.payload;
      const newTierListState = state.filter((tierList) => tierList.id !== id);
      return newTierListState;
    }
    case 'ADD_CHAMPIONLIST': {
      const { tierListId, ...newData } = action.payload;
      const newChampionList = {
        ...newData,
        entries: [...newData.entries],
      };
      const newTierListState = state.map((tierList) => {
        if (tierList.id === tierListId) {
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
    case 'UPDATE_CHAMPIONLIST': {
      const { id, ...updatedData } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.lists.some((championList) => championList.id === id)) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.map((championListItem) => {
            return {
              ...championListItem,
              ...(championListItem.id === id && {
                ...updatedData,
                entries: updatedData.entries
                  ? [...updatedData.entries]
                  : [...championListItem.entries],
              }),
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
      const { id } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.lists.some((championList) => championList.id === id)) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.filter(
            (championListItem) => championListItem.id !== id,
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
    case 'ADD_CHAMPIONLISTENTRY': {
      const { tierListId, championListId, ...newData } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.id === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.map((championListItem) => {
            if (championListItem.id === championListId) {
              return {
                ...championListItem,
                entries: championListItem.entries.concat(newData),
              };
            }
            return { ...championListItem };
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
    case 'UPDATE_CHAMPIONLISTENTRY': {
      const { id, ...updatedData } = action.payload;
      const newTierListState = state.map((tierList) => {
        const championListsArray = tierList.lists ? tierList.lists : [];
        const newChampionListsArray = championListsArray.map((championListItem) => {
          const newEntriesArray = championListItem.entries.map((entryItem) => {
            return {
              ...entryItem,
              ...(entryItem.id === id && { ...updatedData }),
            };
          });
          return {
            ...championListItem,
            entries: newEntriesArray,
          };
        });
        return {
          ...tierList,
          lists: newChampionListsArray,
        };
      });
      return newTierListState;
    }
    case 'MOVE_CHAMPIONLISTENTRY': {
      const { id, tierListId, championListId: newChampionListId } = action.payload;
      let movableChampionEntryData: ChampionListEntryData | undefined;
      const specifiedTierList = state.find((singleTierList) => singleTierList.id === tierListId);
      if (specifiedTierList) {
        for (let counter = 0; counter < specifiedTierList.lists.length; counter += 1) {
          const currentChampionList = specifiedTierList.lists[counter];
          const foundChampionEntry = currentChampionList.entries.find(
            (entryItem) => entryItem.id === id,
          );
          if (foundChampionEntry && newChampionListId !== currentChampionList.id) {
            movableChampionEntryData = { ...foundChampionEntry };
          }
          if (foundChampionEntry) {
            break;
          }
        }
      }
      if (movableChampionEntryData) {
        const newTierListState = state.map((tierList) => {
          if (tierList.id === tierListId) {
            const championListsArray = tierList.lists ? tierList.lists : [];
            const newChampionListsArray = championListsArray.map((singleChampionList) => {
              if (singleChampionList.id === newChampionListId) {
                return {
                  ...singleChampionList,
                  ...(movableChampionEntryData && {
                    entries: singleChampionList.entries.concat(movableChampionEntryData),
                  }),
                };
              }
              return {
                ...singleChampionList,
                entries: singleChampionList.entries.filter((singleEntry) => singleEntry.id !== id),
              };
            });
            return { ...tierList, lists: newChampionListsArray };
          }
          return { ...tierList };
        });
        return newTierListState;
      }
      return state;
    }
    case 'DELETE_CHAMPIONLISTENTRY': {
      const { id } = action.payload;
      const newTierListState = state.map((tierList) => {
        const championListsArray = tierList.lists ? tierList.lists : [];
        const newChampionListsArray = championListsArray.map((championListItem) => {
          const newEntriesArray = championListItem.entries.filter(
            (entryItem) => entryItem.id !== id,
          );
          return {
            ...championListItem,
            entries: newEntriesArray,
          };
        });
        return {
          ...tierList,
          lists: newChampionListsArray,
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
