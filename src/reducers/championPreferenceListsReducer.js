const initialState = {
  userChampionPreferenceLists: {
    Moodboard: {},
    Top: {},
    Jungle: {},
    Mid: {},
    Bottom: {},
    Support: {},
  },
};

const doesListContainChampion = (championList, championName) => {
  if (championList) { return Object.keys(championList).indexOf(championName) >= 0; }
  return false;
};

const championPreferenceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAMPION_TO_LIST': {
      const specifiedListId = action.payload.listId;
      const specifiedChampionId = action.payload.championId;
      const specifiedChampionPrio = action.payload.priority
        ? action.payload.priority
        : 0;
      if (
        !(specifiedListId in state.userChampionPreferenceLists)
                || doesListContainChampion(
                  state.userChampionPreferenceLists[specifiedListId],
                  specifiedChampionId,
                )
      ) {
        break;
      }
      const completeListsCopy = { ...state.userChampionPreferenceLists };
      const specifiedListCopy = {
        ...completeListsCopy[specifiedListId],
      };
      specifiedListCopy[specifiedChampionId] = {
        priority: action.payload.priority,
      };
      completeListsCopy[specifiedListId] = specifiedListCopy;
      return {
        ...state,
        userChampionPreferenceLists: completeListsCopy,
      };
    }
    case 'SET_CHAMPION_PRIORITY': {
      const specifiedListId = action.payload.listId;
      const specifiedChampionId = action.payload.championId;
      const specifiedChampionPrio = action.payload.priority
        ? action.payload.priority
        : 0;
      if (
        !(specifiedListId in state.userChampionPreferenceLists)
                || !doesListContainChampion(
                  state.userChampionPreferenceLists[specifiedListId],
                  specifiedChampionId,
                )
      ) {
        break;
      }
      const completeListsCopy = { ...state.userChampionPreferenceLists };
      const specifiedChampionCopy = {
        ...state.userChampionPreferenceLists[specifiedListId][
          specifiedChampionId
        ],
      };
      specifiedChampionCopy.priority = action.payload.priority;
      completeListsCopy[specifiedListId][
        specifiedChampionId
      ] = specifiedChampionCopy;
      return {
        ...state,
        userChampionPreferenceLists: completeListsCopy,
      };
    }
    case 'SET_CHAMPION_NOTE': {
      const specifiedListId = action.payload.listId;
      const specifiedChampionId = action.payload.championId;
      if (
        !!state.userChampionPreferenceLists.specifiedListId
                || !!state.userChampionPreferenceLists.specifiedListId
                  .specifiedChampionId
      ) {
        break;
      }
      const specifiedChampionCopy = {
        ...state.userChampionPreferenceLists.specifiedListId
          .specifiedChampionId,
      };
      specifiedChampionCopy.note = action.payload.championNote;
      state.userChampionPreferenceLists.specifiedListId.specifiedChampionId = specifiedChampionCopy;
      return {
        ...state,
      };
    }
    case 'REMOVE_CHAMPION_FROM_LIST': {
      const specifiedListId = action.payload.listId;
      const specifiedChampionId = action.payload.championId;
      if (
        !!state.userChampionPreferenceLists.specifiedListId
                || !!state.userChampionPreferenceLists.specifiedListId
                  .specifiedChampionId
      ) {
        break;
      }
      const completeListsCopy = { ...state.userChampionPreferenceLists };
      const specifiedListCopy = Object.keys(
        completeListsCopy.specifiedListId,
      ).reduce((object, key) => {
        if (key !== specifiedChampionId) {
          object[specifiedChampionId] = completeListsCopy.specifiedListId[specifiedChampionId];
        }
        return object;
      }, {});
      completeListsCopy[specifiedListId] = specifiedListCopy;
      return {
        ...state,
        userChampionPreferenceLists: completeListsCopy,
      };
    }
    default:
      return state;
  }
  return state;
};

export default championPreferenceListReducer;
