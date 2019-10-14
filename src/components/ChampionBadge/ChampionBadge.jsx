import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const StyledChampionBadge = styled.div`
  display: inline-block;
  padding: 1rem;
  border: 1px solid grey;
`;

const ChampionBadge = ({ identifier }) => {
  const [collectedProps, dragRef] = useDrag({
    item: { identifier, type: 'champion-badge' },
  });
  return (
    <StyledChampionBadge ref={dragRef}>
      {identifier}
    </StyledChampionBadge>
  );
};

ChampionBadge.propTypes = {
  identifier: PropTypes.string.isRequired,
};

ChampionBadge.defaultProps = {};

export default ChampionBadge;
