import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import Routes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import PageHome from '@/pages/Home';
import PageChampionList from '@/pages/ChampionLists';

const App: React.FC = () => {
  const navigationLinks: JSX.Element[] = [
    <Link key="home" to={Routes.HOME}>
      Home
    </Link>,
    <Link key="champion-lists" to={Routes.CHAMPION_LISTS}>
      My Lists
    </Link>,
  ];
  return (
    <FirebaseProvider>
      <StaticLeagueProvider>
        <Router>
          <NavigationLayout navLinks={navigationLinks}>
            <Switch>
              <Route exact path={Routes.HOME}>
                <PageHome />
              </Route>
              <Route exact path={Routes.CHAMPION_LISTS}>
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
