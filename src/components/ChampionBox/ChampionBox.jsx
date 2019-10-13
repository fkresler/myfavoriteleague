import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useDrop } from 'react-dnd';

const StyledChampionBox = styled.div`
  display: block;
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid grey;
`;

const ChampionBox = ({
  identifier, name, isDroppable, containedChampions,
}) => {
  const [championCollection, dropRef] = useDrop({
    accept: 'champion-badge',
  });
  return (
    <>
      {name && <div>{name}</div>}
      <StyledChampionBox ref={dropRef}>
        {championCollection}
      </StyledChampionBox>
    </>
  );
};

ChampionBox.propTypes = {
  containedChampions: PropTypes.arrayOf(PropTypes.string),
};

ChampionBox.defaultProps = {
  containedChampions: [],
};

export default ChampionBox;
