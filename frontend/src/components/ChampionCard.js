import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionCard = styled.div`
    display: inline-block;
    margin: 1rem;

    img {
        border: 1rem solid ${({isFavorite}) => isFavorite ? "green" : "transparent"};
        border-radius: 50%;
    }
`;

class ChampionCard extends Component {
    toggleChampionInFavorites = () => {
        if(this.props.isChampionInFavorites) {
            this.props.removeChampionFromFavoriteList(this.props.championData.id);
        } else {
            this.props.addChampionToFavoriteList(this.props.championData.id);
        }
    }

    render() {
        let imageUrlPrefix = "http://ddragon.leagueoflegends.com/cdn/" + this.props.championData.version + "/img/champion/";
        return (
            <StyledChampionCard isFavorite={this.props.isChampionInFavorites} onClick={this.toggleChampionInFavorites}>
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
    isChampionInFavorites: PropTypes.bool.isRequired,
    addChampionToFavoriteList: PropTypes.func.isRequired,
    removeChampionFromFavoriteList: PropTypes.func.isRequired
};

export default ChampionCard;
