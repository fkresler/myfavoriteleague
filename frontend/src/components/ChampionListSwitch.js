import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionListSwitch = styled.div`
	width: 60%;
`;

const StyledChampionListSwitchButton = styled.div`
	width: 100%;
	background-color: ${props => props.isActive ? "orange" : "blue"};
	color: #fff;
`;

class ChampionListSwitch extends Component {
	render() {
		return (
			<div className="champion-list-switch-wrapper">
				<ChampionListSwitchButton identifier="complete" content="All Champions" isActive={true} selectOnClick={props.switchToListMode}/>
				<ChampionListSwitchButton identifier="favorites" content="My Favorites" isActive={false} selectOnClick={props.switchToFavMode}/>
			</div>
		);
	}
}

ChampionListSwitch.PropTypes = {
	currentSwitchMode: PropTypes.oneOf(['complete','favorites']).isRequired,
	switchToListMode: PropTypes.func.isRequired,
	switchToFavMode: PropTypes.func.isRequired
};

class ChampionListSwitchButton extends Component {
	render() {
		return (
			<StyledChampionListSwitchButton onClick={selectOnClick}>{content}</StyledChampionListSwitchButton>
		);
	}
}

ChampionListSwitchButton.PropTypes = {
	identifier: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	selectOnClick: PropTypes.func.isRequired
};

export default ChampionListSwitch;
