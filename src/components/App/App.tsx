import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import ChampionListApp from '@/components/ChampionListApp';

const App: React.FC = () => {
  const navigationLinks: JSX.Element[] = [
    <Link to="/">Home</Link>,
    <Link to="/lists">My Lists</Link>,
  ];
  return (
    <Router>
      <NavigationLayout navLinks={navigationLinks}>
        <Switch>
          <Route exact path="/">
            Homepage
          </Route>
          <Route exact path="/lists">
            <StaticLeagueProvider>
              <ChampionListApp />
            </StaticLeagueProvider>
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </NavigationLayout>
    </Router>
  );
};

export default App;
