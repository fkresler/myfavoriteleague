import { connect } from 'react-redux';
import ChampionPreferenceLists from './ChampionPreferenceLists';
import { fetchStaticChampionDataIfNeeded } from '../../Actions/staticChampionDataActions';
import { STATIC_CHAMPION_DATA_NAME, USER_CHAMPION_LIST_DATA_NAME } from '../../Reducers';
import {
  setChampionPriority,
  removeChampionFromList,
} from '../../Actions/userChampionListsActions';

const mapStateToProps = state => ({
  staticChampionData: state.staticChampionData[STATIC_CHAMPION_DATA_NAME],
  userChampionPreferenceLists:
    state.userChampionListData[USER_CHAMPION_LIST_DATA_NAME],
});

const mapDispatchToProps = dispatch => ({
  fetchStaticChampionDataIfNeeded: () => {
    dispatch(fetchStaticChampionDataIfNeeded());
  },
  setChampionPriority: (listId, championId, priority) => {
    dispatch(setChampionPriority(listId, championId, priority));
  },
  removeChampionFromList: (listId, championId) => {
    dispatch(removeChampionFromList(listId, championId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChampionPreferenceLists);
