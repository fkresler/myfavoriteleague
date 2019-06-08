import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionImage from '../../ChampionImage';

const StyledChampionMoodSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0.75rem;

    @media (min-width: 400px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const StyledChampionMoodImage = styled.div`
    flex: 0 0 30%;
    max-width: 5rem;
    max-height: 5rem;
`;

const StyledChampionMoodSelection = styled.div`
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const StyledChampionMoodSelectionBox = styled.div`
    height: 3rem;
    line-height: 3rem;
    width: 3rem;
    background-color: ${({ isActive }) => (isActive ? 'green' : 'white')};
    border: ${({ isActive }) => (isActive ? '3px solid black' : '0')};
    border-radius: 50%;
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
    font-weight: bold;
    color: ${({ isActive }) => (isActive ? 'white' : 'green')};
    text-align: center;
`;

const ChampionMoodSelector = (props) => {
  const championKey = props.staticChampionData.id;
  const currentPriority = props.userChampionData.priority;

  return (
    <StyledChampionMoodSelectorWrapper>
      <StyledChampionMoodImage>
        <ChampionImage championData={props.staticChampionData} />
      </StyledChampionMoodImage>
      <StyledChampionMoodSelection>
        <StyledChampionMoodSelectionBox
          isActive={currentPriority === 1}
          onClick={() => props.setChampionPriority(championKey, 1)}
        >
                    1
        </StyledChampionMoodSelectionBox>
        <StyledChampionMoodSelectionBox
          isActive={currentPriority === 2}
          onClick={() => props.setChampionPriority(championKey, 2)}
        >
                    2
        </StyledChampionMoodSelectionBox>
        <StyledChampionMoodSelectionBox
          isActive={currentPriority === 3}
          onClick={() => props.setChampionPriority(championKey, 3)}
        >
                    3
        </StyledChampionMoodSelectionBox>
      </StyledChampionMoodSelection>
    </StyledChampionMoodSelectorWrapper>
  );
};

ChampionMoodSelector.propTypes = {
  staticChampionData: PropTypes.object.isRequired,
  userChampionData: PropTypes.object.isRequired,
  setChampionPriority: PropTypes.func.isRequired,
  setChampionNote: PropTypes.func.isRequired,
};

export default ChampionMoodSelector;
