export const USER_CHAMPION_LIST_DATA_NAME = 'userChampionListData';

const initialState = {
  userChampionLists: [
    {
      id: 'defaulttop',
      name: 'Top',
      patchVersion: '',
      createdAt: '',
      data: [
        {
          priority: 0,
          name: 'S-Tier',
          champions: [],
        },
        {
          priority: 1,
          name: 'A-Tier',
          champions: [],
        },
        {
          priority: 2,
          name: 'B-Tier',
          champions: [],
        },
      ],
    },
    {
      id: 'defaultjng',
      name: 'Jungle',
      patchVersion: '',
      createdAt: '',
      data: [
        {
          priority: 0,
          name: 'S-Tier',
          champions: [],
        },
        {
          priority: 1,
          name: 'A-Tier',
          champions: [],
        },
        {
          priority: 2,
          name: 'B-Tier',
          champions: [],
        },
      ],
    },
    {
      id: 'defaultmid',
      name: 'Mid',
      patchVersion: '',
      createdAt: '',
      data: [
        {
          priority: 0,
          name: 'S-Tier',
          champions: [],
        },
        {
          priority: 1,
          name: 'A-Tier',
          champions: [],
        },
        {
          priority: 2,
          name: 'B-Tier',
          champions: [],
        },
      ],
    },
    {
      id: 'defaultbot',
      name: 'Bot',
      patchVersion: '',
      createdAt: '',
      data: [
        {
          priority: 0,
          name: 'S-Tier',
          champions: [],
        },
        {
          priority: 1,
          name: 'A-Tier',
          champions: [],
        },
        {
          priority: 2,
          name: 'B-Tier',
          champions: [],
        },
      ],
    },
    {
      id: 'defaultsup',
      name: 'Sup',
      patchVersion: '',
      createdAt: '',
      data: [
        {
          priority: 0,
          name: 'S-Tier',
          champions: [],
        },
        {
          priority: 1,
          name: 'A-Tier',
          champions: [],
        },
        {
          priority: 2,
          name: 'B-Tier',
          champions: [],
        },
      ],
    },
  ],
};

const doesListContainChampion = (championList, championName) => {
  const isChampionInList = false;
  if (championList) { return Object.keys(championList).indexOf(championName) >= 0; }
  return false;
};

const userChampionListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHAMPION_TO_LIST': {
      const specifiedListId = action.payload.listId;
      const specifiedChampionId = action.payload.championId;
      const specifiedChampionPrio = action.payload.priority;
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
      const specifiedChampionPrio = action.payload.priority;
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

export default userChampionListsReducer;
