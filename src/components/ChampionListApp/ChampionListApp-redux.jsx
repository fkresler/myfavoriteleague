import { connect } from 'react-redux';

import { USER_CHAMPION_LIST_DATA_NAME } from 'Reducers';

import ChampionListApp from './ChampionListApp';

const mapStateToProps = state => ({
  userChampionListData: state[USER_CHAMPION_LIST_DATA_NAME],
});

export default connect(
  mapStateToProps,
  null,
)(ChampionListApp);
