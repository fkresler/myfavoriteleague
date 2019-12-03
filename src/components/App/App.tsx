import React from 'react';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import ChampionListApp from '@/components/ChampionListApp';

const App: React.FC = () => {
  return (
    <StaticLeagueProvider>
      <ChampionListApp />
    </StaticLeagueProvider>
  );
};

export default App;
