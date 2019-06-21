import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledChampionImage = styled.div`
    width: 100%;
    border: 1px solid black;
    background-color: grey;
    text-align: center;

    img {
        height: auto;
        width: 100%;
    }
`;

const ChampionImage = (props) => {
  const { championData } = props;
  const { name, version, image } = championData;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${image.full}`;

  return (
    <StyledChampionImage>
      <img
        src={imageUrl}
        alt={name}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
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
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChampionImage;
