import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionListSwitch from 'Components/ChampionListSwitch';
import ChampionMoodBoard from 'Components/ChampionMoodBoard';

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

const ChampionPreferenceLists = (props) => {
  const {
    staticChampionData,
    userChampionPreferenceLists,
    fetchStaticChampionDataIfNeeded,
    addChampionToList,
    setChampionPriority,
    setChampionNote,
  } = props;
  const [defaultUserListIdentifier] = Object.keys(userChampionPreferenceLists);
  const [activeUserListIdentifier, setActiveUserListIdentifier] = useState(defaultUserListIdentifier);

  const isMoodBoard = userListName => userListName && userListName.toLowerCase().indexOf('mood') >= 0;

  const selectActiveUserListWhenPossible = (identifier) => {
    if (Object.keys(userChampionPreferenceLists).indexOf(identifier) > -1) {
      setActiveUserListIdentifier(identifier);
    }
  };

  useEffect(() => {
    fetchStaticChampionDataIfNeeded();
    return () => { };
  }, []);

  return (
    <StyledChampionListsWrapper>
      <ChampionListSwitch
        availableLists={userChampionPreferenceLists}
        currentListIdentifier={activeUserListIdentifier}
        selectListByIdentifier={selectActiveUserListWhenPossible}
      />
      <ChampionMoodBoard
        championListId={activeUserListIdentifier}
        completeChampionSet={staticChampionData}
        selectedChampionSet={userChampionPreferenceLists[activeUserListIdentifier]}
        addChampionToList={addChampionToList}
        setChampionPriority={setChampionPriority}
        setChampionNote={setChampionNote}
      />
    </StyledChampionListsWrapper>
  );
};

ChampionPreferenceLists.defaultProps = {
  staticChampionData: {},
  userChampionPreferenceLists: {
    default: {},
  },
};

ChampionPreferenceLists.propTypes = {
  staticChampionData: PropTypes.shape(),
  userChampionPreferenceLists: PropTypes.shape(),
  fetchStaticChampionDataIfNeeded: PropTypes.func.isRequired,
  addChampionToList: PropTypes.func.isRequired,
  setChampionPriority: PropTypes.func.isRequired,
  setChampionNote: PropTypes.func.isRequired,
};

export default ChampionPreferenceLists;
