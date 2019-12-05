import React from 'react';
import NavigationLayout from '@/components/NavigationLayout';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import ChampionListApp from '@/components/ChampionListApp';

const App: React.FC = () => {
  return (
    <NavigationLayout>
      <StaticLeagueProvider>
        <ChampionListApp />
      </StaticLeagueProvider>
    </NavigationLayout>
  );
};

export default App;
