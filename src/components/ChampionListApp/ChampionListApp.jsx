import React, { useState } from 'react';

import ChampionListSwitch from 'Components/ChampionListSwitch';
import ChampionList from 'Components/ChampionList';

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
      <ChampionList data={currentlySelectedChampionListData} />
    </>
  );
};

export default ChampionListApp;
