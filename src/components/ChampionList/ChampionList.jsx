import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionCard from 'Components/ChampionCard';

const StyledChampionListHeadline = styled.div`
    display: block;
    background-color: green;
    color: white;
    padding: 2rem;
    font-weight: bold;
`;

const StyledStickyWrapper = styled.div`
    display: block;
    background-color: #fff;
    max-height: 75vh;
    overflow-y: scroll;
    position: sticky;
    top: 0;
`;

const StyledChampionList = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
`;

const ChampionList = (props) => {
  const {
    championListId,
    completeChampionData,
    selectedChampionData,
    addChampionToListById,
    removeChampionFromListById,
  } = props;
  const addChampionToCurrentListById = (championKey) => {
    addChampionToListById(
      championListId,
      championKey,
    );
  };
  const removeChampionFromCurrentListById = (championKey) => {
    removeChampionFromListById(
      championListId,
      championKey,
    );
  };
  const toggleChampionInCurrentList = (championKey) => {
    if (selectedChampionData.indexOf(championKey) > -1) {
      removeChampionFromCurrentListById(championKey);
    } else {
      addChampionToCurrentListById(championKey);
    }
  };

  return (
    <React.Fragment>
      <StyledStickyWrapper>
        <StyledChampionListHeadline>
          {championListId}
        </StyledChampionListHeadline>
        <StyledChampionList>
          {Object.keys(selectedChampionData).map(
            key => (
              <ChampionCard
                championData={completeChampionData[key]}
                toggleChampionSelectedState={toggleChampionInCurrentList}
                shouldBeMarked
              />
            ),
          )}
        </StyledChampionList>
        <StyledChampionListHeadline>
          Select your champions from the complete list:
        </StyledChampionListHeadline>
      </StyledStickyWrapper>
      <StyledChampionList>
        {Object.keys(completeChampionData).map((key) => {
          const isChampionInCurrentList = Object.keys(
            selectedChampionData,
          ).indexOf(key) > -1;
          return (
            <ChampionCard
              championData={completeChampionData[key]}
              toggleChampionSelectedState={toggleChampionInCurrentList}
              shouldBeMarked={isChampionInCurrentList}
            />
          );
        })}
      </StyledChampionList>
    </React.Fragment>
  );
};

ChampionList.defaultProps = {
  completeChampionData: {},
  selectedChampionData: {},
};

ChampionList.propTypes = {
  championListId: PropTypes.string.isRequired,
  completeChampionData: PropTypes.shape(),
  selectedChampionData: PropTypes.shape(),
  addChampionToListById: PropTypes.func.isRequired,
  removeChampionFromListById: PropTypes.func.isRequired,
};

export default ChampionList;
