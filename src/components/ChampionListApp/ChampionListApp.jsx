import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChampionListSwitch from 'Components/ChampionListSwitch';
import TierList from 'Components/TierList';

const ChampionListApp = ({ userChampionListData }) => {
  const availableChampionLists = userChampionListData.map(championList => championList.name);
  const defaultSelectedChampionList = availableChampionLists ? availableChampionLists[0] : null;
  const [selectedList, selectList] = useState(defaultSelectedChampionList);
  const currentlySelectedChampionListData = userChampionListData.find(
    championList => championList.name === selectedList,
  );
  return (
    <>
      <ChampionListSwitch
        availableLists={availableChampionLists}
        currentListIdentifier={selectedList}
        selectListByIdentifier={selectList}
      />
      <TierList data={currentlySelectedChampionListData} />
    </>
  );
};

ChampionListApp.propTypes = {
  userChampionListData: PropTypes.arrayOf(PropTypes.object),
};

ChampionListApp.defaultProps = {
  userChampionListData: [],
};

export default ChampionListApp;
