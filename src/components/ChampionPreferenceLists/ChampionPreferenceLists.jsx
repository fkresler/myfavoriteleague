import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChampionListSwitch from '../ChampionListSwitch';
import ChampionMoodBoard from '../ChampionMoodBoard';

const StyledChampionListsWrapper = styled.div`
    display: block;
    width: 100%;
`;

class ChampionPreferenceLists extends Component {
  static isMoodboard(listName) {
    if (listName) {
      return listName.toLowerCase().indexOf('mood') >= 0;
    }
    return false;
  }

  constructor(props) {
    super(props);
    const { userChampionPreferenceLists } = this.props;
    const [firstIdentifier] = Object.keys(userChampionPreferenceLists);
    this.state = {
      activeListIdentifier: firstIdentifier,
    };
    this.selectActiveListByIdentifier = this.selectActiveListByIdentifier.bind(this);
  }

  componentDidMount() {
    const { fetchStaticChampionDataIfNeeded } = this.props;
    fetchStaticChampionDataIfNeeded();
  }

  selectActiveListByIdentifier(identifier) {
    const { userChampionPreferenceLists } = this.props;
    if (
      Object.keys(userChampionPreferenceLists).indexOf(identifier) > -1
    ) {
      this.setState({
        activeListIdentifier: identifier,
      });
    }
  }

  render() {
    const {
      staticChampionData,
      userChampionPreferenceLists,
      addChampionToList,
      setChampionPriority,
      setChampionNote,
    } = this.props;
    const completeChampionData = staticChampionData || {};
    const { activeListIdentifier } = this.state;
    let selectedListData = userChampionPreferenceLists[activeListIdentifier];
    selectedListData = selectedListData || {};
    let toBeRenderedListComponent;
    if (ChampionPreferenceLists.isMoodboard(activeListIdentifier)) {
      toBeRenderedListComponent = (
        <ChampionMoodBoard
          championListId={activeListIdentifier}
          completeChampionSet={completeChampionData}
          selectedChampionSet={selectedListData}
          addChampionToList={addChampionToList}
          setChampionPriority={setChampionPriority}
          setChampionNote={setChampionNote}
        />
      );
    }
    return (
      <StyledChampionListsWrapper>
        <ChampionListSwitch
          availableLists={userChampionPreferenceLists}
          currentListIdentifier={activeListIdentifier}
          selectListByIdentifier={this.selectActiveListByIdentifier}
        />
        {toBeRenderedListComponent}
      </StyledChampionListsWrapper>
    );
  }
}

ChampionPreferenceLists.defaultProps = {
  staticChampionData: {},
  userChampionPreferenceLists: {},
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
