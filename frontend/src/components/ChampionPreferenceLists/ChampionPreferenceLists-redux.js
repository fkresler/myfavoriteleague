import {connect} from "react-redux";
import ChampionPreferenceLists from "./ChampionPreferenceLists";

const mapStateToProps = state => ({
    championData: state.championData,
    userChampionPreferenceLists: state.userChampionPreferenceLists
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChampionPreferenceLists);
