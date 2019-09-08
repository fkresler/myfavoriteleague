import { combineReducers } from 'redux';
import staticChampionDataReducer from './staticChampionDataReducer';
import improvementNotesReducer from './improvementNotesReducer';
import userChampionListsReducer from './userChampionListsReducer';

export const STATIC_CHAMPION_DATA_NAME = 'staticChampionData';
export const IMPROVEMENT_NOTES_DATA_NAME = 'improvementNotesData';
export const USER_CHAMPION_LIST_DATA_NAME = 'userChampionListData';

export const toBeSavedData = [
  IMPROVEMENT_NOTES_DATA_NAME,
  USER_CHAMPION_LIST_DATA_NAME,
];

export default combineReducers({
  staticChampionData: staticChampionDataReducer,
  improvementNotesData: improvementNotesReducer,
  userChampionListData: userChampionListsReducer,
});
