import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ChampionList from 'Components/ChampionList';
import ChampionBadge from 'Components/ChampionBadge/ChampionBadge';

const StyledTierList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyledDraggableContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: orange;
`;

const TierList = ({
  data,
  staticChampionData,
  fetchStaticChampionDataIfNeeded,
  setChampionPriority,
  removeChampionFromList,
}) => {
  useEffect(() => {
    fetchStaticChampionDataIfNeeded();
  }, []);
  const completeChampionList = Object.keys(staticChampionData.staticChampionData).sort();
  const {
    id,
    data: championListData,
  } = data;
  const setChampionPriorityForCurrentList = (priority, champion) => {
    setChampionPriority(id, champion, priority);
  };
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <StyledTierList>
          {championListData.map(tierList => (
            <ChampionList
              {...tierList}
              id={tierList.priority}
              isDroppable
              onDrop={setChampionPriorityForCurrentList}
              key={tierList.name}
            />
          ))}
        </StyledTierList>
        <ChampionList id={100} champions={completeChampionList} />
      </DndProvider>
    </>
  );
};

TierList.propTypes = {
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

TierList.defaultProps = {
  staticChampionData: {
    isStaticChampionDataCorrect: false,
    staticChampionData: {},
    staticChampionDataReceivedAt: '',
    isFetchingStaticChampionData: false,
  },
};

export default TierList;
