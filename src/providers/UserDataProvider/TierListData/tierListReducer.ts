import { TierListData, TierListAction, ChampionEntryData } from '@/types';

export const tierListReducer = (state: TierListData[], action: TierListAction): TierListData[] => {
  switch (action.type) {
    case 'SET_TIERLISTS': {
      const { tierLists } = action.payload;
      return [...tierLists];
    }
    case 'ADD_TIERLIST': {
      const newTierList: TierListData = {
        ...action.payload,
      };
      return [...state, newTierList];
    }
    case 'UPDATE_TIERLIST': {
      const { tierListId, name, order } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          return {
            ...tierList,
            ...(name && { name }),
            ...(order && { order }),
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
    case 'UPDATE_CHAMPIONLIST': {
      const { tierListId, championListId, name, description, order } = action.payload;
      const newTierListState = state.map((tierList) => {
        if (tierList.tierListId === tierListId) {
          const championListsArray = tierList.lists ? tierList.lists : [];
          const newChampionListsArray = championListsArray.map((item) => {
            if (item.championListId === championListId) {
              return {
                ...item,
                ...(name && { name }),
                ...(description && { description }),
                ...(order && { order }),
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
                    ...(note && { note }),
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
    case 'MOVE_CHAMPIONENTRY': {
      const { tierListId, championEntryId, championListId: newChampionListId } = action.payload;
      let movableChampionEntryData: ChampionEntryData | undefined;
      const specifiedTierList = state.find(
        (singleTierList) => singleTierList.tierListId === tierListId,
      );
      if (specifiedTierList) {
        for (let counter = 0; counter < specifiedTierList.lists.length; counter += 1) {
          const currentChampionList = specifiedTierList.lists[counter];
          const foundChampionEntry = currentChampionList.entries.find(
            (entryItem) => entryItem.championEntryId === championEntryId,
          );
          if (foundChampionEntry && newChampionListId !== currentChampionList.championListId) {
            movableChampionEntryData = { ...foundChampionEntry };
          }
          if (foundChampionEntry) {
            break;
          }
        }
      }
      if (movableChampionEntryData) {
        const newTierListState = state.map((tierList) => {
          if (tierList.tierListId === tierListId) {
            const championListsArray = tierList.lists ? tierList.lists : [];
            const newChampionListsArray = championListsArray.map((singleChampionList) => {
              if (singleChampionList.championListId === newChampionListId) {
                return {
                  ...singleChampionList,
                  ...(movableChampionEntryData && {
                    entries: singleChampionList.entries.concat(movableChampionEntryData),
                  }),
                };
              }
              return {
                ...singleChampionList,
                entries: singleChampionList.entries.filter(
                  (singleEntry) => singleEntry.championEntryId !== championEntryId,
                ),
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
