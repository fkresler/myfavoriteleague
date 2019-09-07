import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionImage from 'Components/ChampionImage';

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
  const { staticChampionData, userChampionData, setChampionPriority } = props;

  return (
    <StyledChampionMoodSelectorWrapper>
      <StyledChampionMoodImage>
        <ChampionImage championData={staticChampionData} />
      </StyledChampionMoodImage>
      <StyledChampionMoodSelection>
        <StyledChampionMoodSelectionBox
          isActive={userChampionData.priority === 1}
          onClick={() => setChampionPriority(staticChampionData.id, 1)}
        >
          1
        </StyledChampionMoodSelectionBox>
        <StyledChampionMoodSelectionBox
          isActive={userChampionData.priority === 2}
          onClick={() => setChampionPriority(staticChampionData.id, 2)}
        >
          2
        </StyledChampionMoodSelectionBox>
        <StyledChampionMoodSelectionBox
          isActive={userChampionData.priority === 3}
          onClick={() => setChampionPriority(staticChampionData.id, 3)}
        >
          3
        </StyledChampionMoodSelectionBox>
      </StyledChampionMoodSelection>
    </StyledChampionMoodSelectorWrapper>
  );
};

ChampionMoodSelector.defaultProps = {
  staticChampionData: {},
  userChampionData: {},
};

ChampionMoodSelector.propTypes = {
  staticChampionData: PropTypes.shape(),
  userChampionData: PropTypes.shape(),
  setChampionPriority: PropTypes.func.isRequired,
};

export default ChampionMoodSelector;
