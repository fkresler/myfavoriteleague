import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '@/utils/testUtils';
import { ChampionBox } from './ChampionBox';

describe('ChampionBox', () => {
  it('renders available champions', () => {
    render(<ChampionBox championId="Aatrox" />);
    expect(screen.getByTestId('champion-image')).toBeTruthy();
  });
  it('does not render unavailable champions', () => {
    render(<ChampionBox championId="AoShin" />);
    expect(screen.queryByTestId('champion-image')).toBeNull();
  });
  it('does not render a info badge when there is no info provided', () => {
    render(<ChampionBox championId="Aatrox" />);
    expect(screen.getByTestId('champion-image')).toBeTruthy();
    expect(screen.queryByTestId('info-icon')).toBeNull();
  });
  it('renders a info badge when there is info provided', () => {
    render(<ChampionBox championId="Aatrox" info="This champion rocks!" />);
    expect(screen.getByTestId('info-icon')).toBeTruthy();
  });
});
