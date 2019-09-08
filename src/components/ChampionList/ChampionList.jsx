import React, { useEffect } from 'react';

import TierList from 'Components/TierList';

const ChampionList = ({
  data,
  staticChampionData,
  fetchStaticChampionDataIfNeeded,
  setChampionPriority,
  removeChampionFromList,
}) => {
  useEffect(() => {
    fetchStaticChampionDataIfNeeded();
  }, []);
  const {
    createdAt,
    data: tierListData,
    name,
    id,
    patchVersion,
  } = data;
  return (
    <>
      <div>{name}</div>
      {tierListData.map(tierList => (
        <TierList key={tierList.priority} data={tierList} />
      ))}
    </>
  );
};

export default ChampionList;
