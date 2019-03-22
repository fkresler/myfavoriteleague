import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionImage = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ChampionImage = props => {
    let imageUrlPrefix =
        "http://ddragon.leagueoflegends.com/cdn/" +
        this.props.championData.version +
        "/img/champion/";
    let championId = this.props.championData.id;
    return (
        <StyledChampionImage>
            <img
                src={imageUrlPrefix + this.props.championData.image.full}
                title={this.props.championData.name}
                alt={this.props.championData.name}
            />
        </StyledChampionImage>
    );
};

ChampionImage.propTypes = {
    championData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired
    })
};

export default ChampionImage;
