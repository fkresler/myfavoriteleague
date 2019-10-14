import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TierList from 'Components/TierList';
import ChampionBadge from 'Components/ChampionBadge/ChampionBadge';

const StyledChampionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledDraggableContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: orange;
`;

const ChampionList = ({
  data,
  staticChampionData,
  fetchStaticChampionDataIfNeeded,
  setChampionPriority,
  removeChampionFromList,
}) => {
  useEffect(() => {
    fetchStaticChampionDataIfNeeded();
  }, []);
  const completeChampionList = ['Akali', 'Ahri', 'Azir'];
  const {
    id,
    data: tierListData,
  } = data;
  const setChampionPriorityForCurrentList = (priority, champion) => {
    setChampionPriority(id, champion, priority);
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <StyledChampionList>
          {tierListData.map(tierList => (
            <TierList {...tierList} id={tierList.priority} onDrop={setChampionPriorityForCurrentList} key={tierList.name} />
          ))}
        </StyledChampionList>
        <StyledDraggableContainer>
          {completeChampionList.map(champion => (
            <ChampionBadge key={champion} identifier={champion} />
          ))}
        </StyledDraggableContainer>
      </DndProvider>
    </>
  );
};

ChampionList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  staticChampionData: PropTypes.shape({
    isStaticChampionDataCorrect: PropTypes.bool,
    staticChampionData: PropTypes.object,
    staticChampionDataReceivedAt: PropTypes.number,
    isFetchingStaticChampionData: PropTypes.bool,
  }),
  fetchStaticChampionDataIfNeeded: PropTypes.func.isRequired,
  setChampionPriority: PropTypes.func.isRequired,
  removeChampionFromList: PropTypes.func.isRequired,
};

ChampionList.defaultProps = {
  staticChampionData: {
    isStaticChampionDataCorrect: false,
    staticChampionData: {},
    staticChampionDataReceivedAt: '',
    isFetchingStaticChampionData: false,
  },
};

export default ChampionList;
