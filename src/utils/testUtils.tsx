import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { darkTheme } from '@/theme';
import { StaticLeagueContext, StaticLeagueData } from '@/providers/StaticLeagueProvider';
import {
  UserDataContext,
  useTierListData,
  useNoteData,
  useUserSettingsData,
} from '@/providers/UserDataProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ChampionDataMock } from '@/mocks/StaticChampionDataMock';

interface MockedProviderData {
  customTheme: DefaultTheme;
  customStaticData: StaticLeagueData;
  customTierListData: ReturnType<typeof useTierListData>;
  customNoteData: ReturnType<typeof useNoteData>;
  customUserSettingsData: ReturnType<typeof useUserSettingsData>;
}

const AllProviders: React.FC<Partial<MockedProviderData>> = ({
  children,
  customTheme = darkTheme,
  customStaticData = {
    isLoading: false,
    hasError: false,
    championData: ChampionDataMock,
  },
  customTierListData = {
    state: {
      hasLoaded: true,
      hasChanged: false,
      isLoading: false,
      isError: false,
      data: [],
    },
    dispatch: () => {},
  },
  customNoteData = {
    state: {
      hasLoaded: true,
      hasChanged: false,
      isLoading: false,
      isError: false,
      data: [],
    },
    dispatch: () => {},
  },
  customUserSettingsData = {
    state: {
      hasLoaded: true,
      hasChanged: false,
      isLoading: false,
      isError: false,
      data: {},
    },
    dispatch: () => {},
  },
}) => (
  <StaticLeagueContext.Provider value={customStaticData}>
    <UserDataContext.Provider
      value={{
        tierlists: customTierListData,
        notes: customNoteData,
        usersettings: customUserSettingsData,
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </DndProvider>
    </UserDataContext.Provider>
  </StaticLeagueContext.Provider>
);

const customRender = (ui: React.ReactElement, data?: Partial<MockedProviderData>) => {
  return render(
    <AllProviders
      customTheme={data?.customTheme}
      customStaticData={data?.customStaticData}
      customTierListData={data?.customTierListData}
      customNoteData={data?.customNoteData}
      customUserSettingsData={data?.customUserSettingsData}
    >
      {ui}
    </AllProviders>,
  );
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
