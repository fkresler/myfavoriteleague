import React, { useState, useEffect } from 'react';
import Weedwick from 'weedwick-api';

export interface IStaticLeagueProvider {
  state: {
    isLoading: boolean;
    championData: any | null;
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
  const [championData, setChampionData] = useState<any | null>(null);
  useEffect(() => {
    let abortFn: () => void;
    setIsLoading(true);
    const fetchAndSetData = async () => {
      const staticApi = new Weedwick();
      const championResponse = await staticApi.getChampionData();
      const { data, abort } = championResponse;
      abortFn = abort;
      setChampionData(data);
      setIsLoading(false);
    };
    fetchAndSetData();
    return () => {
      abortFn();
    };
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
