import { connect } from 'react-redux';

import { STATIC_CHAMPION_DATA_NAME } from 'Reducers';
import {
  setChampionPriority,
  removeChampionFromList,
} from 'Actions/userChampionListsActions';
import {
  fetchStaticChampionDataIfNeeded,
} from 'Actions/staticChampionDataActions';

import ChampionList from './ChampionList';

const mapStateToProps = state => ({
  staticChampionData: state[STATIC_CHAMPION_DATA_NAME],
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
)(ChampionList);
