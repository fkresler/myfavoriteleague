import {combineReducers} from "redux";
import userDataReducer from "./userDataReducer";
import riotApiDataReducer from "./riotApiDataReducer";
import improvementNotesReducer from "./improvementNotesReducer";
import championPreferenceListsReducer from "./championPreferenceListsReducer";

export default combineReducers({
    userDataState: userDataReducer,
    riotApiDataState: riotApiDataReducer,
    improvementNotesState: improvementNotesReducer,
    championPreferenceListsState: championPreferenceListsReducer
});
