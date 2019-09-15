import React, { useEffect } from 'react';
import { DndContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
    data: tierListData,
    name,
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
