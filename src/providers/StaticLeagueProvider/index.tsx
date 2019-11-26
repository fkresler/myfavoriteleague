import React, { useState, useEffect } from 'react';
import { LolApi } from 'twisted';
import { ChampionsDataDragon } from 'twisted/dist/dto';

export interface IStaticLeagueProvider {
  state: {
    isLoading: boolean;
    championData: ChampionsDataDragon | null;
  };
}

export const StaticLeagueContext = React.createContext<IStaticLeagueProvider>({
  state: {
    isLoading: true,
    championData: null,
  },
});

export const StaticLeagueProvider: React.FunctionComponent = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [championData, setChampionData] = useState<ChampionsDataDragon | null>(null);
  useEffect(() => {
    const staticApi = new LolApi();
    setIsLoading(true);
    staticApi.DataDragon.getChampion().then((jsonData) => {
      setChampionData(jsonData);
      setIsLoading(false);
    });
  }, []);
  return (
    <StaticLeagueContext.Provider
      value={{
        state: {
          isLoading,
          championData,
        },
      }}
    >
      {children}
    </StaticLeagueContext.Provider>
  );
};

export default StaticLeagueProvider;
