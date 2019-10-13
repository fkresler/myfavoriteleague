import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

const StyledChampionBoxHeading = styled.div`
  display: block;
  font-size: 125%;
  font-weight: bold;
`;

export const ChampionBoxWrapper = styled.div`
  display: block;
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid grey;
`;

const ChampionBox = ({
  identifier, name, isDroppable, onDrop, containedChampions,
}) => {
  const [championCollection, dropRef] = useDrop({
    accept: 'champion-badge',
    drop: isDroppable
      ? champion => onDrop(identifier, champion.name)
      : () => { },
  });
  return (
    <>
      {name && (
        <StyledChampionBoxHeading>
          {name}
        </StyledChampionBoxHeading>
      )}
      <ChampionBoxWrapper ref={isDroppable ? dropRef : null}>
        {containedChampions.map(champion => (
          <div>{champion}</div>
        ))}
      </ChampionBoxWrapper>
    </>
  );
};

ChampionBox.propTypes = {
  identifier: PropTypes.string.isRequired,
  name: PropTypes.string,
  isDroppable: PropTypes.bool,
  onDrop: PropTypes.func,
  containedChampions: PropTypes.arrayOf(PropTypes.string),
};

ChampionBox.defaultProps = {
  name: '',
  isDroppable: false,
  onDrop: () => { },
  containedChampions: [],
};

export default ChampionBox;
