import {connect} from "react-redux";
import ChampionPreferenceListsApp from "./ChampionPreferenceListsApp";

const mapStateToProps = state => ({
    championData: state.championData,
    userChampionPreferenceLists: state.userChampionPreferenceLists
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChampionPreferenceListsApp);
