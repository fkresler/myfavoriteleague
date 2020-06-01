import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationLayout from '@/components/NavigationLayout';
import Routes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import { UserDataContext, UserDataProvider } from '@/providers/UserDataProvider';
import PageHome from '@/routes/Home';
import PageChampionList from '@/routes/TierLists';
import PageNotes from '@/routes/Notes';
import routesignUp from '@/routes/SignUp';
import routesignIn from '@/routes/SignIn';
import PageResetPassword from '@/routes/ResetPassword';
import PageNotFound from '@/routes/NotFound';
import { lightTheme, darkTheme } from '@/providers/ThemeProvider/theme';

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <StaticLeagueProvider>
        <UserDataProvider>
          <ThemedApp />
        </UserDataProvider>
      </StaticLeagueProvider>
    </FirebaseProvider>
  );
};

const ThemedApp: React.FC = () => {
  const { usersettings } = React.useContext(UserDataContext);
  const {
    state: {
      data: { useDarkTheme },
    },
  } = usersettings;
  return (
    <Router>
      <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        <NavigationLayout>
          <Switch>
            <Route exact path={Routes.LANDING} component={PageHome} />
            <Route exact path={Routes.HOME} component={PageHome} />
            <Route exact path={Routes.SIGN_UP} component={routesignUp} />
            <Route exact path={Routes.SIGN_IN} component={routesignIn} />
            <Route exact path={Routes.PASSWORD_FORGET} component={PageResetPassword} />
            <Route exact path={Routes.CHAMPION_LISTS} component={PageChampionList} />
            <Route exact path={Routes.NOTES} component={PageNotes} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </NavigationLayout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
