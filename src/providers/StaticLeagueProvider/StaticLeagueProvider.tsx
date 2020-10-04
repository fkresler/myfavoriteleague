import React, { useState, useEffect } from 'react';
import Weedwick, { DataDragonChampions } from 'weedwick-api';

export interface StaticLeagueData {
  isLoading: boolean;
  hasError: boolean;
  championData: DataDragonChampions | undefined;
}

export const StaticLeagueContext = React.createContext<StaticLeagueData>({
  isLoading: true,
  hasError: false,
  championData: undefined,
});

const StaticLeagueProvider: React.FC<Partial<StaticLeagueData>> = ({
  isLoading: inIsLoading = true,
  hasError: inHasError = false,
  championData: inChampionData,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(inIsLoading);
  const [hasError, setHasError] = useState<boolean>(inHasError);
  const [championData, setChampionData] = useState<DataDragonChampions | undefined>(inChampionData);

  useEffect(() => {
    if (championData) {
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
  }, [championData]);

  return (
    <StaticLeagueContext.Provider
      value={{
        isLoading,
        hasError,
        championData,
      }}
    >
      {children}
    </StaticLeagueContext.Provider>
  );
};

export default StaticLeagueProvider;
