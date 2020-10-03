import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { darkTheme } from '@/theme';
import { FirebaseContext } from '@/providers/FirebaseProvider';
import { StaticLeagueContext } from '@/providers/StaticLeagueProvider';
import { UserDataContext } from '@/providers/UserDataProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Router } from 'react-router-dom';

const AllProviders: React.FC<{
  customTheme?: DefaultTheme,
  customFirebaseData?: ,
  customStaticData?: ,
  customUserData?: ,
  customHistory?: string,
}> = ({
  children,
  customTheme = darkTheme,
  customFirebaseData,
  customStaticData,
  customUserData,
  customHistory,
}) => (
  <FirebaseContext.Provider value={customFirebaseData}>
    <StaticLeagueContext.Provider value={customStaticData}>
      <UserDataContext.Provider value={customUserData}>
        <DndProvider backend={HTML5Backend}>
          <Router history={customHistory}>
            <ThemeProvider theme={customTheme}>
              {children}
            </ThemeProvider>
          </Router>
        </DndProvider>
      </UserDataContext.Provider>
    </StaticLeagueContext.Provider>
  </FirebaseContext.Provider>
);

const customRender = (ui: React.ReactNode, options) => {
  return render(<AllProviders {...options}>{ui}</AllProviders>);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
