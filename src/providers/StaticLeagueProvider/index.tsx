import React, { useState, useEffect } from 'react';
import Weedwick, { DataDragonChampions } from 'weedwick-api';

export interface IStaticLeagueProvider {
  state: {
    isLoading: boolean;
    championData: DataDragonChampions | null;
  };
}

export const StaticLeagueContext = React.createContext<IStaticLeagueProvider>({
  state: {
    isLoading: true,
    championData: null,
  },
});

export const StaticLeagueProvider: React.FC<{ mockData?: IStaticLeagueProvider }> = ({
  mockData,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [championData, setChampionData] = useState<DataDragonChampions | null>(null);

  useEffect(() => {
    let abortFn = () => {};
    if (!mockData) {
      setIsLoading(true);
      const fetchAndSetData = async () => {
        const staticApi = new Weedwick();
        const championResponse = await staticApi.getChampionData();
        const { data, abort } = championResponse;
        abortFn = abort;
        if (data) {
          setChampionData(data);
        }
        setIsLoading(false);
      };
      fetchAndSetData();
    }
    return () => {
      abortFn();
    };
  }, [mockData]);

  return (
    <StaticLeagueContext.Provider
      value={
        mockData || {
          state: {
            isLoading,
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
