import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChampionCard from "../ChampionCard";

const StyledChampionListHeadline = styled.div`
    display: block;
    background-color: green;
    color: white;
    padding: 2rem;
    font-weight: bold;
`;

const StyledStickyWrapper = styled.div`
    display: block;
    background-color: #fff;
    max-height: 75vh;
    overflow-y: scroll;
    position: sticky;
    top: 0;
`;

const StyledChampionList = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
`;

class ChampionList extends Component {
    toggleChampionInCurrentList = championKey => {
        if (this.props.selectedChampionData.indexOf(championKey) > -1) {
            this.removeChampionFromCurrentListById(championKey);
        } else {
            this.addChampionToCurrentListById(championKey);
        }
    };

    addChampionToCurrentListById = championKey => {
        this.props.addChampionToListById(
            this.props.championListId,
            championKey
        );
    };

    removeChampionFromCurrentListById = championKey => {
        this.props.removeChampionFromListById(
            this.props.championListId,
            championKey
        );
    };

    render() {
        return (
            <React.Fragment>
                <StyledStickyWrapper>
                    <StyledChampionListHeadline>
                        {this.props.championListId}
                    </StyledChampionListHeadline>
                    <StyledChampionList>
                        {Object.keys(this.props.selectedChampionData).map(
                            key => {
                                return (
                                    <ChampionCard
                                        championData={
                                            this.props.completeChampionData[key]
                                        }
                                        toggleChampionSelectedState={
                                            this.toggleChampionInCurrentList
                                        }
                                        shouldBeMarked={true}
                                    />
                                );
                            }
                        )}
                    </StyledChampionList>
                    <StyledChampionListHeadline>
                        Select your champions from the complete list:
                    </StyledChampionListHeadline>
                </StyledStickyWrapper>
                <StyledChampionList>
                    {Object.keys(this.props.completeChampionData).map(key => {
                        let isChampionInCurrentList =
                            Object.keys(
                                this.props.selectedChampionData
                            ).indexOf(key) > -1;
                        return (
                            <ChampionCard
                                championData={
                                    this.props.completeChampionData[key]
                                }
                                toggleChampionSelectedState={
                                    this.toggleChampionInCurrentList
                                }
                                shouldBeMarked={isChampionInCurrentList}
                            />
                        );
                    })}
                </StyledChampionList>
            </React.Fragment>
        );
    }
}

ChampionList.propTypes = {
    championListId: PropTypes.string.isRequired,
    completeChampionData: PropTypes.object.isRequired,
    selectedChampionData: PropTypes.object.isRequired,
    addChampionToListById: PropTypes.func.isRequired,
    removeChampionFromListById: PropTypes.func.isRequired
};

export default ChampionList;
