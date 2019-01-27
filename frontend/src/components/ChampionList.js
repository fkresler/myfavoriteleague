import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class ChampionList extends Component {
    render() {
        return (
            <div>LUL</div>
        );
    }
}

ChampionList.propTypes = {
    championListId: PropTypes.string.isRequired,
    completeChampionData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }),
    selectedChampionData: PropTypes.array.isRequired,
    addChampionToListById: PropTypes.func.isRequired,
    removeChampionFromListById: PropTypes.func.isRequired
}

export default ChampionList;
