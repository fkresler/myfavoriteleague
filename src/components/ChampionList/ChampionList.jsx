import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import ChampionBadge from 'Components/ChampionBadge';


const StyledChampionList = styled.div`
  display: block;
  margin: 1rem 0;
`;

const ChampionListHeadline = styled.div`
  display: block;
  font-size: 125%;
  font-weight: bold;
`;

const ChampionListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 5rem;
  padding: 0.5rem;
  border: ${({ hovered }) => (hovered ? '1px solid red' : '1px solid grey')};

  & > * {
    margin: 0.5rem;
  }
`;

const ChampionList = ({
  id, name, isDroppable, onDrop, champions,
}) => {
  const [additionalProps, dropRef] = useDrop({
    accept: 'champion-badge',
    drop: (champion) => {
      if (isDroppable) {
        onDrop(id, champion.identifier);
      }
    },
    collect: monitor => ({
      hovered: monitor.isOver(),
    }),
  });
  return (
    <StyledChampionList>
      {name && (
        <ChampionListHeadline>
          {name}
        </ChampionListHeadline>
      )}
      <ChampionListWrapper hovered={additionalProps.hovered} ref={dropRef}>
        {champions.map(champion => (
          <ChampionBadge key={champion} identifier={champion} />
        ))}
      </ChampionListWrapper>
    </StyledChampionList>
  );
};

ChampionList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isDroppable: PropTypes.bool,
  onDrop: PropTypes.func,
  champions: PropTypes.arrayOf(PropTypes.string),
};

ChampionList.defaultProps = {
  name: '',
  isDroppable: false,
  onDrop: () => { },
  champions: [],
};

export default ChampionList;
