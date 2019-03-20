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
            let currentListId = action.payload.listId;
            let currentChampionId = action.payload.championId;
            if (
                !!state.userChampionPreferenceLists.currentListId ||
                !!state.userChampionPreferenceLists.currentListId.championId
            ) {
                break;
            }
            let allListsCopy = {...state.userChampionPreferenceLists};
            let currentListCopy = {
                ...allListsCopy.currentListId
            };
            currentListCopy[currentChampionId] = {
                priority: action.payload.priority
            };
            allListsCopy.currentListId = currentListCopy;
            return {
                ...state,
                userChampionPreferenceLists: allListsCopy
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
