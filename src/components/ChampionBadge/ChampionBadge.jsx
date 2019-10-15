import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const StyledChampionBadge = styled.div`
  display: inline-block;

  img {
    height: 5rem;
    width: auto;
    border-radius: 100%;
    border: 1px solid grey;
  }
`;

const ChampionBadge = ({ staticChampionData, identifier }) => {
  const [collectedProps, dragRef] = useDrag({
    item: { identifier, type: 'champion-badge' },
  });
  const {
    staticChampionData: fullChampionData,
    isStaticChampionDataCorrect,
  } = staticChampionData;
  const currentChampionData = fullChampionData[identifier] ? fullChampionData[identifier] : {};
  const {
    name = '',
    version = '',
    image = '',
  } = currentChampionData;
  const imageUrlPrefix = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
  return (
    <StyledChampionBadge ref={dragRef}>
      <img
        src={imageUrlPrefix + image.full}
        alt={name}
      />
    </StyledChampionBadge>
  );
};

ChampionBadge.propTypes = {
  staticChampionData: PropTypes.shape({
    isStaticChampionDataCorrect: PropTypes.bool,
    staticChampionData: PropTypes.object,
    staticChampionDataReceivedAt: PropTypes.number,
    isFetchingStaticChampionData: PropTypes.bool,
  }),
  identifier: PropTypes.string.isRequired,
};

ChampionBadge.defaultProps = {
  staticChampionData: {
    isStaticChampionDataCorrect: false,
    staticChampionData: {},
    staticChampionDataReceivedAt: '',
    isFetchingStaticChampionData: false,
  },
};

export default ChampionBadge;
