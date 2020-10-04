import React from 'react';
import { StaticLeagueContext } from '@/providers/StaticLeagueProvider';

export const useChampionData = (championId: string) => {
  const { isLoading, hasError, championData } = React.useContext(StaticLeagueContext);

  return {
    isLoading,
    hasError,
    data: championData?.data[championId],
  };
};

export const useAllChampionData = () => {
  const { isLoading, hasError, championData } = React.useContext(StaticLeagueContext);

  return {
    isLoading,
    hasError,
    data: championData?.data,
  };
};

export default useChampionData;
