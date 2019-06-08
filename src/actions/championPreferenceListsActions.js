export function addChampionToList(listId, championId, priority = 1) {
  return {
    type: 'ADD_CHAMPION_TO_LIST',
    payload: {
      listId,
      championId,
      priority,
    },
  };
}

export function setChampionPriority(listId, championId, priority) {
  return {
    type: 'SET_CHAMPION_PRIORITY',
    payload: {
      listId,
      championId,
      priority,
    },
  };
}

export function setChampionNote(listId, championId, championNote) {
  return {
    type: 'SET_CHAMPION_NOTE',
    payload: {
      listId,
      championId,
      championNote,
    },
  };
}

export function removeChampionFromList(listId, championId) {
  return {
    type: 'REMOVE_CHAMPION_FROM_LIST',
    payload: {
      listId,
      championId,
    },
  };
}
