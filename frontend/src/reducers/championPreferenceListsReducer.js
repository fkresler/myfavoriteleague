const championPreferenceListReducer = (
    state = {
        userChampionPreferenceLists: {
            Top: {},
            Jungle: {},
            Mid: {},
            Bottom: {},
            Support: {}
        }
    },
    action
) => {
    switch (action.type) {
        case "ADD_CHAMPION_TO_LIST":
            break;
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
