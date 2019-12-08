import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import PageHome from '@/components/PageHome';
import PageChampionList from '@/components/PageChampionList';

const App: React.FC = () => {
  const navigationLinks: JSX.Element[] = [
    <Link key="home" to="/">
      Home
    </Link>,
    <Link key="lists" to="/lists">
      My Lists
    </Link>,
  ];
  return (
    <FirebaseProvider>
      <StaticLeagueProvider>
        <Router>
          <NavigationLayout navLinks={navigationLinks}>
            <Switch>
              <Route exact path="/">
                <PageHome />
              </Route>
              <Route exact path="/lists">
                <PageChampionList />
              </Route>
              <Route path="*">404</Route>
            </Switch>
          </NavigationLayout>
        </Router>
      </StaticLeagueProvider>
    </FirebaseProvider>
  );
};

export default App;
