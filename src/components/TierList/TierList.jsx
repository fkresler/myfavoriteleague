import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

const TierListHeadline = styled.div`
  display: block;
  font-size: 125%;
  font-weight: bold;
`;

const TierListWrapper = styled.div`
  display: block;
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid grey;
`;

const TierList = ({
  id, name, onDrop, champions,
}) => {
  const [championCollection, dropRef] = useDrop({
    accept: 'champion-badge',
    drop: (champion) => {
      onDrop(id, champion.identifier);
    },
  });
  return (
    <>
      {name && (
        <TierListHeadline>
          {name}
        </TierListHeadline>
      )}
      <TierListWrapper ref={dropRef}>
        {champions.map(champion => (
          <div key={champion}>
            {champion}
          </div>
        ))}
      </TierListWrapper>
    </>
  );
};

TierList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  onDrop: PropTypes.func,
  champions: PropTypes.arrayOf(PropTypes.string),
};

TierList.defaultProps = {
  name: '',
  onDrop: () => { },
  champions: [],
};

export default TierList;
