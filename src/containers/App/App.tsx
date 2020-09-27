import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Routes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import { UserDataContext, UserDataProvider } from '@/providers/UserDataProvider';
import {
  Home,
  Notes,
  NotFound,
  ResetPassword,
  SignIn,
  SignUp,
  Styleguide,
  TierLists,
} from '@/routes';
import { lightTheme, darkTheme } from '@/theme';
import AppLayout from './AppLayout';

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
        <AppLayout>
          <Switch>
            <Route exact path={Routes.LANDING} component={Home} />
            <Route exact path={Routes.HOME} component={Home} />
            <Route exact path={Routes.SIGN_UP} component={SignUp} />
            <Route exact path={Routes.SIGN_IN} component={SignIn} />
            <Route exact path={Routes.PASSWORD_FORGET} component={ResetPassword} />
            <Route exact path={Routes.CHAMPION_LISTS} component={TierLists} />
            <Route exact path={Routes.NOTES} component={Notes} />
            <Route exact path={Routes.STYLEGUIDE} component={Styleguide} />
            <Route path="*" component={NotFound} />
          </Switch>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <StaticLeagueProvider>
        <UserDataProvider>
          <DndProvider backend={HTML5Backend}>
            <ThemedApp />
          </DndProvider>
        </UserDataProvider>
      </StaticLeagueProvider>
    </FirebaseProvider>
  );
};

export default App;
