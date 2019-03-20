const initialState = {
    userChampionPreferenceLists: {
        Moodboard: {},
        Top: {},
        Jungle: {},
        Mid: {},
        Bottom: {},
        Support: {}
    }
};

const championPreferenceListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHAMPION_TO_LIST":
            let specifiedListId = action.payload.listId;
            let specifiedChampionId = action.payload.championId;
            if (
                !!state.userChampionPreferenceLists.specifiedListId ||
                !!state.userChampionPreferenceLists.specifiedListId
                    .specifiedChampionId
            ) {
                break;
            }
            let completeListsCopy = {...state.userChampionPreferenceLists};
            let specifiedListCopy = {
                ...completeListsCopy.specifiedListId
            };
            specifiedListCopy[specifiedChampionId] = {
                priority: action.payload.priority
            };
            completeListsCopy.specifiedListId = specifiedListCopy;
            return {
                ...state,
                userChampionPreferenceLists: completeListsCopy
            };
        case "SET_CHAMPION_PRIORITY":
            break;
        case "SET_CHAMPION_NOTE":
            break;
        case "REMOVE_CHAMPION_FROM_LIST":
            break;
        default:
            return state;
    }
    return state;
};

export default championPreferenceListReducer;
