export const setChampionPriority = (listId, championId, priority = 0) => ({
  type: 'SET_CHAMPION_PRIORITY',
  payload: {
    listId,
    championId,
    priority,
  },
});

export const removeChampionFromList = (listId, championId) => ({
  type: 'REMOVE_CHAMPION_FROM_LIST',
  payload: {
    listId,
    championId,
  },
});
