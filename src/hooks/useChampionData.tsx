import React from 'react';
import { StaticLeagueContext } from '@/providers/StaticLeagueProvider';

const useChampionData = (championId: string) => {
  const { state } = React.useContext(StaticLeagueContext);
  const { championData } = state;

  if (!championData) {
    return null;
  }

  return championData.data[championId];
};

export default useChampionData;
