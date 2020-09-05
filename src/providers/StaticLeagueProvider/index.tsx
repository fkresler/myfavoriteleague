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
  let isComponentRendered = true;

  useEffect(() => {
    if (!mockData) {
      setIsLoading(true);
      (async () => {
        const staticApi = new Weedwick();
        const data = await staticApi.getChampionData();
        if (data && isComponentRendered) {
          setChampionData(data);
        }
        if (isComponentRendered) {
          setIsLoading(false);
        }
      })();
    }
    return () => {
      isComponentRendered = false;
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
