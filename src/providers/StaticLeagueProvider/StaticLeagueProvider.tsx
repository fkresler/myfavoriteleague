import React, { useState, useEffect } from 'react';
import Weedwick, { DataDragonChampions } from 'weedwick-api';

export interface IStaticLeagueProvider {
  state: {
    isLoading: boolean;
    hasError: boolean;
    championData: DataDragonChampions | null;
  };
}

export const StaticLeagueContext = React.createContext<IStaticLeagueProvider>({
  state: {
    isLoading: true,
    hasError: false,
    championData: null,
  },
});

export const StaticLeagueProvider: React.FC<{
  mockData?: IStaticLeagueProvider;
}> = ({ mockData, children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [championData, setChampionData] = useState<DataDragonChampions | null>(null);

  useEffect(() => {
    if (mockData) {
      return;
    }
    setIsLoading(true);
    try {
      (async () => {
        const staticApi = new Weedwick();
        const data = await staticApi.getChampionData();
        if (data) {
          setChampionData(data);
          setIsLoading(false);
        } else {
          throw new Error(`Received data was not right format: ${data}`);
        }
      })();
    } catch (e) {
      setHasError(true);
      setIsLoading(false);
    }
  }, [mockData]);

  return (
    <StaticLeagueContext.Provider
      value={
        mockData || {
          state: {
            isLoading,
            hasError,
            championData,
          },
        }
      }
    >
      {children}
    </StaticLeagueContext.Provider>
  );
};

export default StaticLeagueProvider;
