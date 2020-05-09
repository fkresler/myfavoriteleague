import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import Routes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import PageHome from '@/routes/Home';
import PageChampionList from '@/routes/TierLists';
import routesignUp from '@/routes/SignUp';
import routesignIn from '@/routes/SignIn';
import PageResetPassword from '@/routes/ResetPassword';
import PageNotFound from '@/routes/NotFound';
import Theme from '@/providers/ThemeProvider/theme';

const App: React.FC = () => {
  React.useEffect(() => {
    window.onbeforeunload = () => {
      return 'You have unsaved changes!';
    };
  }, []);

  return (
    <FirebaseProvider>
      <StaticLeagueProvider>
        <Router>
          <ThemeProvider theme={Theme}>
            <NavigationLayout>
              <Switch>
                <Route exact path={Routes.LANDING} component={PageHome} />
                <Route exact path={Routes.HOME} component={PageHome} />
                <Route exact path={Routes.SIGN_UP} component={routesignUp} />
                <Route exact path={Routes.SIGN_IN} component={routesignIn} />
                <Route exact path={Routes.PASSWORD_FORGET} component={PageResetPassword} />
                <Route exact path={Routes.CHAMPION_LISTS} component={PageChampionList} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </NavigationLayout>
          </ThemeProvider>
        </Router>
      </StaticLeagueProvider>
    </FirebaseProvider>
  );
};

export default App;
