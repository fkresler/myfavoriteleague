import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChampionCard from "./ChampionCard";

const StyledChampionListHeadline = styled.div`
    display: block;
    background-color: green;
    color: white;
    padding: 2rem;
`;

class ChampionList extends Component {
    toggleChampionInCurrentList = (championKey) => {
        if(this.props.selectedChampionData.indexOf(championKey) > -1) {
            this.removeChampionFromCurrentListById(championKey);
        } else {
            this.addChampionToCurrentListById(championKey);
        }
    }

    addChampionToCurrentListById = (championKey) => {
        this.props.addChampionToListById(this.props.championListId, championKey);
    }

    removeChampionFromCurrentListById = (championKey) => {
        this.props.removeChampionFromListById(this.props.championListId, championKey);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <StyledChampionListHeadline>{this.props.championListId}</StyledChampionListHeadline>
                    {this.props.selectedChampionData.map((key) => {
                        return (
                            <ChampionCard championData={this.props.completeChampionData[key]}
                                toggleChampionSelectedState={this.toggleChampionInCurrentList}
                                shouldBeMarked={true}
                            />
                        );
                    })}
                </div>
                <div>
                    <StyledChampionListHeadline>Select your champions from the complete list:</StyledChampionListHeadline>
                    {Object.keys(this.props.completeChampionData).map((key) => {
                        let isChampionInCurrentList = this.props.selectedChampionData.indexOf(key) > -1;
                        return (
                            <ChampionCard championData={this.props.completeChampionData[key]}
                                toggleChampionSelectedState={this.toggleChampionInCurrentList}
                                shouldBeMarked={isChampionInCurrentList}
                            />
                        );
                    })}
                </div>
            </React.Fragment>
        );
    }
}

ChampionList.propTypes = {
    championListId: PropTypes.string.isRequired,
    completeChampionData: PropTypes.object.isRequired,
    selectedChampionData: PropTypes.array.isRequired,
    addChampionToListById: PropTypes.func.isRequired,
    removeChampionFromListById: PropTypes.func.isRequired
}

export default ChampionList;
