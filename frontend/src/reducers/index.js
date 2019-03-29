import {combineReducers} from "redux";
import riotApiDataReducer from "./riotApiDataReducer";
import improvementNotesReducer from "./improvementNotesReducer";
import championPreferenceListsReducer from "./championPreferenceListsReducer";

export default combineReducers({
    riotApiDataState: riotApiDataReducer,
    improvementNotesState: improvementNotesReducer,
    championPreferenceListsState: championPreferenceListsReducer
});
