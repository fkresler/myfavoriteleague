import {combineReducers} from "redux";
import improvementNotesReducer from "./improvementNotesReducer";
import championPreferenceListsReducer from "./championPreferenceListsReducer";

export default combineReducers({
    improvementNotesReducer,
    championPreferenceListsReducer
});
