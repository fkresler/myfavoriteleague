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
	text-align: center;
	text-decoration: ${({isActive}) => isActive ? "underline" : "none"};
	user-select: none;
`;

class ChampionListSwitch extends Component {
	render() {
		let currentListIdentifier = this.props.currentListIdentifier;
		let selectListByIdentifier = this.props.selectListByIdentifier;
		return (
			<StyledChampionListSwitch>
				{Object.keys(this.props.availableLists).map((key) => {
					return (
						<StyledChampionListSwitchButton isActive={key === currentListIdentifier} onClick={() => selectListByIdentifier(key)}>
							{key}
						</StyledChampionListSwitchButton>
					);
				})}
			</StyledChampionListSwitch>
		);
	}
}

ChampionListSwitch.propTypes = {
	availableLists: PropTypes.object.isRequired,
	currentListIdentifier: PropTypes.string.isRequired,
	selectListByIdentifier: PropTypes.func.isRequired
};

export default ChampionListSwitch;
