import { combineReducers } from 'redux';
import staticChampionDataReducer from './staticChampionDataReducer';
import improvementNotesReducer, {
  IMPROVEMENT_NOTES_DATA_NAME,
} from './improvementNotesReducer';
import userChampionListsReducer, {
  USER_CHAMPION_LIST_DATA_NAME,
} from './userChampionListsReducer';

export { STATIC_CHAMPION_DATA_NAME } from './staticChampionDataReducer';
export { IMPROVEMENT_NOTES_DATA_NAME } from './improvementNotesReducer';
export { USER_CHAMPION_LIST_DATA_NAME } from './userChampionListsReducer';

export const toBeSavedData = [
  IMPROVEMENT_NOTES_DATA_NAME,
  USER_CHAMPION_LIST_DATA_NAME,
];

export default combineReducers({
  staticChampionData: staticChampionDataReducer,
  improvementNotesData: improvementNotesReducer,
  userChampionListData: userChampionListsReducer,
});
