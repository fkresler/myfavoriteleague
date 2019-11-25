import { connect } from 'react-redux';
import { STATIC_CHAMPION_DATA_NAME } from 'Reducers';
import {
  fetchStaticChampionDataIfNeeded,
} from 'Actions/staticChampionDataActions';
import ChampionBadge from './ChampionBadge';

const mapStateToProps = state => ({
  staticChampionData: state[STATIC_CHAMPION_DATA_NAME],
});

const mapDispatchToProps = dispatch => ({
  fetchStaticChampionDataIfNeeded: () => {
    dispatch(fetchStaticChampionDataIfNeeded());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChampionBadge);
