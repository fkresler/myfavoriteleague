import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledChampionCard = styled.div`
    display: inline-block;
    margin: 1rem;

    img {
        height: 10vh;
        max-height: 5rem;
        width: auto;
        border: 1rem solid ${({ shouldBeMarked }) => (shouldBeMarked ? 'green' : 'transparent')};
        border-radius: 50%;
    }
`;

const ChampionCard = (props) => {
  const { championData, shouldBeMarked, toggleChampionSelectedState } = props;
  const imageUrlPrefix = `http://ddragon.leagueoflegends.com/cdn/${championData.version}/img/champion/`;
  return (
    <StyledChampionCard
      shouldBeMarked={!!shouldBeMarked}
      onClick={() => toggleChampionSelectedState(championData.id)}
    >
      <img
        src={imageUrlPrefix + championData.image.full}
        title={championData.name}
        alt={championData.name}
      />
    </StyledChampionCard>
  );
};

ChampionCard.defaultProps = {
  shouldBeMarked: false,
};

ChampionCard.propTypes = {
  championData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  toggleChampionSelectedState: PropTypes.func.isRequired,
  shouldBeMarked: PropTypes.bool,
};

export default ChampionCard;
