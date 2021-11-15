import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import internalRoutes from '@/types/routes';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import FirebaseProvider from '@/providers/FirebaseProvider';
import { UserDataContext, UserDataProvider } from '@/providers/UserDataProvider';
import {
  Home, Notes, NotFound, ResetPassword, SignIn, SignUp, TierLists,
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
          <Routes>
            <Route path={internalRoutes.LANDING} element={<Home />} />
            <Route path={internalRoutes.HOME} element={<Home />} />
            <Route path={internalRoutes.SIGN_UP} element={<SignUp />} />
            <Route path={internalRoutes.SIGN_IN} element={<SignIn />} />
            <Route path={internalRoutes.PASSWORD_FORGET} element={<ResetPassword />} />
            <Route path={internalRoutes.CHAMPION_LISTS} element={<TierLists />} />
            <Route path={internalRoutes.NOTES} element={<Notes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </Router>
  );
};

const App: React.FC = () => (
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

export default App;
