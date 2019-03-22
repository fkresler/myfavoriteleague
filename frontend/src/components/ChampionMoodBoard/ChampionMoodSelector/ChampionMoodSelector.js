import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChampionImage from "../../ChampionImage";

const StyledChampionMoodSelectorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const ChampionMoodSelector = props => {
    return (
        <StyledChampionMoodSelectorWrapper>
            <ChampionImage championData={props.staticChampionData} />
        </StyledChampionMoodSelectorWrapper>
    );
};

ChampionMoodSelector.propTypes = {
    staticChampionData: PropTypes.object.isRequired,
    userChampionData: PropTypes.object.isRequired,
    setChampionPriority: PropTypes.func.isRequired,
    setChampionNote: PropTypes.func.isRequired
};

export default ChampionMoodSelector;
