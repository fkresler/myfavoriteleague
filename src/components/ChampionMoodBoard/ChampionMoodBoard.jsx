import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionMoodSelector from './ChampionMoodSelector';

const StyledChampionMoodBoard = styled.div`
    display: block;
    width: 100%;
`;

const ChampionMoodBoard = (props) => {
  const {
    championListId,
    completeChampionSet,
    selectedChampionSet,
    addChampionToList,
    setChampionPriority,
    setChampionNote,
  } = props;
  const handleChampionPriorityChange = (championKey, championPriority) => {
    setChampionPriority(
      props.championListId,
      championKey,
      championPriority,
    );
  };

  return (
    <StyledChampionMoodBoard>
      {Object.keys(completeChampionSet).map((key) => {
        const userChampionData = selectedChampionSet[key];
        if (!userChampionData) {
          addChampionToList(championListId, key);
        }
        return (
          !!userChampionData && (
          <ChampionMoodSelector
            staticChampionData={completeChampionSet[key]}
            userChampionData={userChampionData}
            setChampionPriority={handleChampionPriorityChange}
            setChampionNote={setChampionNote}
          />
          )
        );
      })}
    </StyledChampionMoodBoard>
  );
};

ChampionMoodBoard.defaultProps = {
  completeChampionSet: {},
  selectedChampionSet: {},
};

ChampionMoodBoard.propTypes = {
  championListId: PropTypes.string.isRequired,
  completeChampionSet: PropTypes.shape(),
  selectedChampionSet: PropTypes.shape(),
  addChampionToList: PropTypes.func.isRequired,
  setChampionPriority: PropTypes.func.isRequired,
  setChampionNote: PropTypes.func.isRequired,
};

export default ChampionMoodBoard;
