import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChampionMoodSelector from "./ChampionMoodSelector";

const StyledChampionMoodBoard = styled.div`
    display: block;
    width: 100%;
`;

const ChampionMoodBoard = props => {
    return (
        <StyledChampionMoodBoard>
            {Object.keys(props.completeChampionSet).map(key => {
                let userChampionData = props.selectedChampionSet[key];
                if (!!userChampionData) {
                    return (
                        <ChampionMoodSelector
                            staticChampionData={props.completeChampionSet[key]}
                            userChampionData={userChampionData}
                            setChampionPriority={props.setChampionPriority}
                            setChampionNote={props.setChampionNote}
                        />
                    );
                } else {
                    props.addChampionToList(props.championListId, key);
                }
            })}
        </StyledChampionMoodBoard>
    );
};

ChampionMoodBoard.propTypes = {
    championListId: PropTypes.string.isRequired,
    completeChampionSet: PropTypes.object.isRequired,
    selectedChampionSet: PropTypes.object,
    addChampionToList: PropTypes.func.isRequired,
    setChampionPriority: PropTypes.func.isRequired,
    setChampionNote: PropTypes.func.isRequired
};

export default ChampionMoodBoard;
