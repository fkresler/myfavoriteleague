const defaultChampionListStructure = [
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
];

const initialState = [
  {
    id: 'defaulttop',
    name: 'Top',
    patchVersion: '',
    createdAt: '',
    data: defaultChampionListStructure,
  },
  {
    id: 'defaultjng',
    name: 'Jungle',
    patchVersion: '',
    createdAt: '',
    data: defaultChampionListStructure,
  },
  {
    id: 'defaultmid',
    name: 'Mid',
    patchVersion: '',
    createdAt: '',
    data: defaultChampionListStructure,
  },
  {
    id: 'defaultbot',
    name: 'Bot',
    patchVersion: '',
    createdAt: '',
    data: defaultChampionListStructure,
  },
  {
    id: 'defaultsup',
    name: 'Sup',
    patchVersion: '',
    createdAt: '',
    data: defaultChampionListStructure,
  },
];

const removeChampionFromListImmutable = (listObject, championId) => {
  const previousListData = listObject.data;
  let mutatedListData;
  if (previousListData) {
    mutatedListData = previousListData.map(tierList => ({
      ...tierList,
      champions: tierList.champions.filter(
        tierListChampionId => tierListChampionId !== championId,
      ),
    }));
  } else {
    mutatedListData = defaultChampionListStructure;
  }
  const mutatedListObject = {
    ...listObject,
    data: mutatedListData,
  };
  return mutatedListObject;
};

const addChampionToChampionListImmutable = (listObject, championId, priority) => {
  const previousListData = listObject.data
    ? listObject.data
    : defaultChampionListStructure;
  let mutatedListData;
  const specifiedTierListIndex = previousListData.findIndex(
    tierList => tierList.priority === priority,
  );
  if (specifiedTierListIndex >= 0) {
    const mutatedTierListChampions = previousListData[specifiedTierListIndex]
      .champions
      .concat(championId);
    const mutatedTierList = {
      ...previousListData[specifiedTierListIndex],
      champions: mutatedTierListChampions,
    };
    mutatedListData = [...previousListData];
    mutatedListData[specifiedTierListIndex] = mutatedTierList;
  } else {
    mutatedListData = previousListData;
  }
  const mutatedListObject = {
    ...listObject,
    data: mutatedListData,
  };
  return mutatedListObject;
};

const userChampionListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHAMPION_PRIORITY': {
      const { listId, championId, priority } = action.payload;
      const specifiedChampionListIndex = state.findIndex(
        championList => championList.id === listId,
      );
      if (specifiedChampionListIndex >= 0) {
        const filteredChampionList = removeChampionFromListImmutable(
          state[specifiedChampionListIndex],
          championId,
        );
        const mutatedChampionList = addChampionToChampionListImmutable(
          filteredChampionList,
          championId,
          priority,
        );
        const mutatedChampionLists = [...state];
        mutatedChampionLists[specifiedChampionListIndex] = mutatedChampionList;
        return mutatedChampionLists;
      }
      return [...state];
    }
    case 'REMOVE_CHAMPION_FROM_LIST': {
      const { listId, championId } = action.payload;
      const specifiedChampionListIndex = state.findIndex(
        championList => championList.id === listId,
      );
      if (specifiedChampionListIndex >= 0) {
        const mutatedChampionList = removeChampionFromListImmutable(
          state[specifiedChampionListIndex],
          championId,
        );
        const mutatedChampionLists = [...state];
        mutatedChampionLists[specifiedChampionListIndex] = mutatedChampionList;
        return mutatedChampionLists;
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

export default userChampionListsReducer;
