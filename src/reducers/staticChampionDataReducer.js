const initialState = {
  isStaticChampionDataCorrect: false,
  staticChampionData: {},
  isFetchingStaticChampionData: false,
  staticChampionDataReceivedAt: null,
};

const staticChampionDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_STATIC_CHAMPION_DATA': {
      return {
        ...state,
        isFetchingStaticChampionData: action.payload.isFetchingStaticChampionData,
      };
    }
    case 'RECEIVE_STATIC_CHAMPION_DATA': {
      if (action.payload.isStaticChampionDataCorrect) {
        return {
          ...state,
          isStaticChampionDataCorrect: action.payload.isStaticChampionDataCorrect,
          staticChampionData: action.payload.staticChampionData,
          staticChampionDataReceivedAt: action.payload.staticChampionDataReceivedAt,
          isFetchingStaticChampionData: action.payload.isFetchingStaticChampionData,
        };
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default staticChampionDataReducer;