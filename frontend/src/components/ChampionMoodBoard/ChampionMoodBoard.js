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
            {Object.keys(selectedChampionSet).map(key => {
                return (
                    !!completeChampionSet[key] && (
                        <ChampionMoodSelector
                            staticChampionData={completeChampionSet[key]}
                            userChampionData={selectedChampionSet[key]}
                            setChampionPriority={props.setChampionPriority}
                            setChampionNote={props.setChampionNote}
                        />
                    )
                );
            })}
        </StyledChampionMoodBoard>
    );
};

ChampionMoodBoard.propTypes = {
    championListId: PropTypes.string.isRequired,
    completeChampionSet: PropTypes.object.isRequired,
    selectedChampionSet: PropTypes.object.isRequired,
    addChampionToList: PropTypes.func.isRequired,
    setChampionPriority: PropTypes.func.isRequired,
    setChampionNote: PropTypes.func.isRequired
};

export default ChampionMoodBoard;
