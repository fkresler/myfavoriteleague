import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithStaticData as render } from '@/utils/testUtils';
import { ChampionDataMock } from '@/mocks/StaticChampionDataMock';
import { ChampionBox } from './ChampionBox';

const mockedStaticProviderData = {
  state: {
    isLoading: false,
    championData: ChampionDataMock,
  },
};

describe('ChampionBox', () => {
  it('renders available champions', () => {
    render(<ChampionBox championId="Aatrox" />, mockedStaticProviderData);
    expect(screen.getByTestId('champion-image')).toBeTruthy();
  });
  it('does not render unavailable champions', () => {
    render(<ChampionBox championId="AoShin" />, mockedStaticProviderData);
    expect(screen.queryByTestId('champion-image')).toBeNull();
  });
  it('does not render a info badge when there is no info provided', () => {
    render(<ChampionBox championId="Aatrox" />, mockedStaticProviderData);
    expect(screen.getByTestId('champion-image')).toBeTruthy();
    expect(screen.queryByTestId('info-icon')).toBeNull();
  });
  it('renders a info badge when there is info provided', () => {
    render(
      <ChampionBox championId="Aatrox" info="This champion rocks!" />,
      mockedStaticProviderData,
    );
    expect(screen.getByTestId('info-icon')).toBeTruthy();
  });
});
