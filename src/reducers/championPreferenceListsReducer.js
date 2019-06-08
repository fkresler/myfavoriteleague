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

const doesListContainChampion = (championList, championName) => {
    if (championList)
        return Object.keys(championList).indexOf(championName) >= 0;
    return false;
};

const championPreferenceListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CHAMPION_TO_LIST": {
            let specifiedListId = action.payload.listId;
            let specifiedChampionId = action.payload.championId;
            let specifiedChampionPrio = action.payload.priority
                ? action.payload.priority
                : 0;
            if (
                !(specifiedListId in state.userChampionPreferenceLists) ||
                doesListContainChampion(
                    state.userChampionPreferenceLists[specifiedListId],
                    specifiedChampionId
                )
            ) {
                break;
            }
            let completeListsCopy = {...state.userChampionPreferenceLists};
            let specifiedListCopy = {
                ...completeListsCopy[specifiedListId]
            };
            specifiedListCopy[specifiedChampionId] = {
                priority: action.payload.priority
            };
            completeListsCopy[specifiedListId] = specifiedListCopy;
            return {
                ...state,
                userChampionPreferenceLists: completeListsCopy
            };
        }
        case "SET_CHAMPION_PRIORITY": {
            let specifiedListId = action.payload.listId;
            let specifiedChampionId = action.payload.championId;
            let specifiedChampionPrio = action.payload.priority
                ? action.payload.priority
                : 0;
            if (
                !(specifiedListId in state.userChampionPreferenceLists) ||
                !doesListContainChampion(
                    state.userChampionPreferenceLists[specifiedListId],
                    specifiedChampionId
                )
            ) {
                break;
            }
            let completeListsCopy = {...state.userChampionPreferenceLists};
            let specifiedChampionCopy = {
                ...state.userChampionPreferenceLists[specifiedListId][
                    specifiedChampionId
                ]
            };
            specifiedChampionCopy.priority = action.payload.priority;
            completeListsCopy[specifiedListId][
                specifiedChampionId
            ] = specifiedChampionCopy;
            return {
                ...state,
                userChampionPreferenceLists: completeListsCopy
            };
        }
        case "SET_CHAMPION_NOTE": {
            let specifiedListId = action.payload.listId;
            let specifiedChampionId = action.payload.championId;
            if (
                !!state.userChampionPreferenceLists.specifiedListId ||
                !!state.userChampionPreferenceLists.specifiedListId
                    .specifiedChampionId
            ) {
                break;
            }
            let specifiedChampionCopy = {
                ...state.userChampionPreferenceLists.specifiedListId
                    .specifiedChampionId
            };
            specifiedChampionCopy.note = action.payload.championNote;
            state.userChampionPreferenceLists.specifiedListId.specifiedChampionId = specifiedChampionCopy;
            return {
                ...state
            };
        }
        case "REMOVE_CHAMPION_FROM_LIST": {
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
            let specifiedListCopy = Object.keys(
                completeListsCopy.specifiedListId
            ).reduce((object, key) => {
                if (key !== specifiedChampionId) {
                    object[specifiedChampionId] =
                        completeListsCopy.specifiedListId[specifiedChampionId];
                }
                return object;
            }, {});
            completeListsCopy[specifiedListId] = specifiedListCopy;
            return {
                ...state,
                userChampionPreferenceLists: completeListsCopy
            };
        }
        default:
            return state;
    }
    return state;
};

export default championPreferenceListReducer;
