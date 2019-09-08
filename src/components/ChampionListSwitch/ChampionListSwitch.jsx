import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledChampionListSwitch = styled.div`
    display: flex;
    width: 60%;
    margin: 1rem auto;
    border-radius: 3px;
    overflow: hidden;
`;

const StyledChampionListSwitchButton = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    padding: 1rem;
    background-color: ${({ isActive }) => (isActive ? 'blue' : 'orange')};
    color: #fff;
    font-weight: bold;
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
    text-align: center;
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
    user-select: none;
`;

const ChampionListSwitch = (props) => {
  const { availableLists, currentListIdentifier, selectListByIdentifier } = props;
  return (
    <StyledChampionListSwitch>
      {availableLists.map(key => (
        <StyledChampionListSwitchButton
          key={key}
          isActive={key === currentListIdentifier}
          onClick={() => selectListByIdentifier(key)}
        >
          {key}
        </StyledChampionListSwitchButton>
      ))}
    </StyledChampionListSwitch>
  );
};

ChampionListSwitch.defaultProps = {
  availableLists: [],
  currentListIdentifier: null,
};

ChampionListSwitch.propTypes = {
  availableLists: PropTypes.arrayOf(PropTypes.string),
  currentListIdentifier: PropTypes.string,
  selectListByIdentifier: PropTypes.func.isRequired,
};

export default ChampionListSwitch;
