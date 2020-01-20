import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import Routes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import PageHome from '@/pages/Home';
import PageChampionList from '@/pages/TierLists';
import PageSignUp from '@/pages/SignUp';
import PageSignIn from '@/pages/SignIn';
import PageResetPassword from '@/pages/ResetPassword';
import PageNotFound from '@/pages/NotFound';

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
              <Route exact path={Routes.LANDING} component={PageHome} />
              <Route exact path={Routes.HOME} component={PageHome} />
              <Route exact path={Routes.SIGN_UP} component={PageSignUp} />
              <Route exact path={Routes.SIGN_IN} component={PageSignIn} />
              <Route exact path={Routes.PASSWORD_FORGET} component={PageResetPassword} />
              <Route exact path={Routes.CHAMPION_LISTS} component={PageChampionList} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </NavigationLayout>
        </Router>
      </StaticLeagueProvider>
    </FirebaseProvider>
  );
};

export default App;
