import React from 'react';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';

const App: React.FC = () => {
  return (
    <StaticLeagueProvider>
      <div>Some content!</div>
    </StaticLeagueProvider>
  );
};

export default App;
