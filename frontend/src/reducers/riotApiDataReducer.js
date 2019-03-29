const initialState = {
    isStaticChampionDataSuccessful: false,
    staticChampionData: {},
    isFetchingStaticChampionData: false,
    staticChampionDataReceivedAt: null
};

const riotApiDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REQUEST_STATIC_CHAMPION_DATA": {
            return {
                ...state,
                isFetchingStaticChampionData:
                    action.payload.isFetchingStaticChampionData
            };
        }
        case "RECEIVE_STATIC_CHAMPION_DATA": {
            if (action.payload.isStaticChampionDataSuccessful) {
                return {
                    ...state,
                    staticChampionData: action.payload.championData,
                    staticChampionDataReceivedAt:
                        action.payload.staticChampionDataReceivedAt,
                    isFetchingStaticChampionData:
                        action.payload.isFetchingStaticChampionData
                };
            }
        }
        default:
            return {...state};
    }
};

export default riotApiDataReducer;
