import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionCard = styled.div`
    display: inline-block;
    margin: 1rem;

    img {
        border: 1rem solid ${({shouldBeMarked}) => shouldBeMarked ? "green" : "transparent"};
        border-radius: 50%;
    }
`;

class ChampionCard extends Component {
    render() {
        let imageUrlPrefix = "http://ddragon.leagueoflegends.com/cdn/" + this.props.championData.version + "/img/champion/";
        let championId = this.props.championData.id;
        return (
            <StyledChampionCard shouldBeMarked={!!this.props.shouldBeMarked} onClick={() => this.props.toggleChampionSelectedState(championId)}>
                <img src={imageUrlPrefix + this.props.championData.image.full} title={this.props.championData.name} alt={this.props.championData.name}/>
            </StyledChampionCard>
        );
    }
}

ChampionCard.propTypes = {
    championData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    }),
    toggleChampionSelectedState: PropTypes.func.isRequired,
    shouldBeMarked: PropTypes.bool
};

export default ChampionCard;
