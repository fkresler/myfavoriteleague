import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledChampionImage = styled.div`
    height: 100%;

    img {
        width: auto;
        height: 100%;
    }
`;

const ChampionImage = props => {
    let imageUrlPrefix =
        "http://ddragon.leagueoflegends.com/cdn/" +
        props.championData.version +
        "/img/champion/";
    let championId = props.championData.id;
    return (
        <StyledChampionImage>
            <img
                src={imageUrlPrefix + props.championData.image.full}
                title={props.championData.name}
                alt={props.championData.name}
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
