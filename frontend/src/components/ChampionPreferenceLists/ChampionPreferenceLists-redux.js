import {connect} from "react-redux";
import ChampionPreferenceLists from "./ChampionPreferenceLists";
import {fetchStaticChampionDataIfNeeded} from "../../actions/riotApiDataActions";
import {
    addChampionToList,
    setChampionPriority,
    setChampionNote,
    removeChampionFromList
} from "../../actions/championPreferenceListsActions";

const mapStateToProps = state => {
    return {
        staticChampionData: state.riotApiDataState.staticChampionData,
        userChampionPreferenceLists:
            state.championPreferenceListsState.userChampionPreferenceLists
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStaticChampionDataIfNeeded: () => {
        dispatch(fetchStaticChampionDataIfNeeded());
    },
    addChampionToList: (listId, championId, priority) => {
        dispatch(addChampionToList(listId, championId, priority));
    },
    setChampionPriority: (listId, championId, priority) => {
        dispatch(addChampionToList(listId, championId, priority));
    },
    setChampionNote: (listId, championId, championNote) => {
        dispatch(setChampionNote(listId, championId, championNote));
    },
    removeChampionFromList: (listId, championId) => {
        dispatch(removeChampionFromList(listId, championId));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChampionPreferenceLists);
