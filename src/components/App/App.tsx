import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                <Route exact path={Routes.SIGN_UP} component={PageSignUp} />
                <Route exact path={Routes.SIGN_IN} component={PageSignIn} />
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
