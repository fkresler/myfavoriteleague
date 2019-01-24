import React, {Component} from "react";
import PropTypes from "prop-types";

class ChampionListSwitch extends Component {
	render() {
		return (
			<div className="champion-list-switch-wrapper">
				<div className="champion-list-switch-list-mode">List</div>
				<div className="champion-list-switch-fav-mode">Favorites</div>
			</div>
		);
	}
}

ChampionListSwitch.PropTypes = {
	currentSwitchMode: PropTypes.bool.isRequired,
	switchToListMode: PropTypes.func.isRequired,
	switchToFavMode: PropTypes.func.isRequired
};

export default ChampionListSwitch;
