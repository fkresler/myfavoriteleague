import React, { useContext } from 'react';
import { StaticLeagueContext } from '@/providers/StaticLeagueProvider';

const ChampionListApp: React.FC = () => {
  const { state } = useContext(StaticLeagueContext);
  const { isLoading: isChampionDataLoading, championData } = state;
  return <>{isChampionDataLoading ? <div> Is loading ...</div> : <div>Some content</div>}</>;
};

export default ChampionListApp;
