import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionListSwitch = styled.div`
	display: flex;
	width: 60%;
	margin: 1rem auto;
	border-radius: 3px;
	overflow: hidden;
`;

const StyledChampionListSwitchButton = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	padding-top: 1rem;
	padding-bottom: 1rem;
	background-color: ${({isActive}) => isActive ? "blue" : "orange"};
	color: #fff;
	font-weight: bold;
	cursor: ${({isActive}) => isActive ? "default" : "pointer"};
	text-decoration: ${({isActive}) => isActive ? "underline" : "none"};
	user-select: none;
`;

class ChampionListSwitch extends Component {
	render() {
		let currentListIdentifier = this.props.currentListIdentifier;
		let selectListByIdentifier = this.props.selectListByIdentifier;
		return (
			<StyledChampionListSwitch>
				<StyledChampionListSwitchButton isActive={currentListIdentifier === "complete"} onClick={() => selectListByIdentifier("complete")}>
					All Champions
				</StyledChampionListSwitchButton>
				<StyledChampionListSwitchButton isActive={currentListIdentifier === "favorites"} onClick={() => selectListByIdentifier("favorites")}>
					Favorites
				</StyledChampionListSwitchButton>
			</StyledChampionListSwitch>
		);
	}
}

ChampionListSwitch.propTypes = {
	currentListIdentifier: PropTypes.oneOf(["complete","favorites"]).isRequired,
	selectListByIdentifier: PropTypes.func.isRequired
};

export default ChampionListSwitch;
