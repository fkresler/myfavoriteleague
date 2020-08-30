import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithStaticData as render } from '@/utils/testUtils';
import { ChampionDataMock } from '@/mocks/StaticChampionDataMock';
import { ChampionSelect } from './ChampionSelect';

const mockedStaticProviderData = {
  state: {
    isLoading: false,
    championData: ChampionDataMock,
  },
};

describe('ChampionSelect', () => {
  it('renders all available champions', () => {
    render(<ChampionSelect />, mockedStaticProviderData);
    expect(screen.queryAllByTestId('champion-box').length).toEqual(3);
  });
  it('calls the onSelectionChange function when adding champions to the selection', () => {
    const debugSelectionChange = jest.fn();
    render(<ChampionSelect onSelectionChange={debugSelectionChange} />, mockedStaticProviderData);
    expect(screen.queryAllByTestId('champion-box').length).toEqual(3);
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(1);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox']);
    fireEvent.click(screen.queryAllByTestId('champion-box')[1]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(2);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox', 'Ahri']);
  });
  it('calls the onSelectionChange function when adding to and removing champions from the selection', () => {
    const debugSelectionChange = jest.fn();
    render(<ChampionSelect onSelectionChange={debugSelectionChange} />, mockedStaticProviderData);
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(1);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox']);
    fireEvent.click(screen.queryAllByTestId('champion-box')[1]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(2);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox', 'Ahri']);
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(3);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Ahri']);
  });
  it('does not call the onSelectionChange function when the champion is disabled', () => {
    const debugSelectionChange = jest.fn();
    render(
      <ChampionSelect
        disabledChampions={['Aatrox', 'Akali']}
        onSelectionChange={debugSelectionChange}
      />,
      mockedStaticProviderData,
    );
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.queryAllByTestId('champion-box')[1]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(1);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Ahri']);
    fireEvent.click(screen.queryAllByTestId('champion-box')[2]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(1);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Ahri']);
  });
  it('renders a submit button when an onSubmit function is provided', () => {
    render(<ChampionSelect onSubmit={jest.fn()} />, mockedStaticProviderData);
    expect(screen.getByText('These are my champions!')).toBeTruthy();
  });
  it('calls the provided onSubmit function when the submit button is clicked', () => {
    const debugSubmit = jest.fn();
    render(<ChampionSelect onSubmit={debugSubmit} />, mockedStaticProviderData);
    expect(debugSubmit).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText('These are my champions!'));
    expect(debugSubmit).toHaveBeenCalledTimes(1);
    expect(debugSubmit).toHaveBeenLastCalledWith([]);
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    fireEvent.click(screen.getByText('These are my champions!'));
    expect(debugSubmit).toHaveBeenCalledTimes(2);
    expect(debugSubmit).toHaveBeenLastCalledWith(['Aatrox']);
  });
  it('renders no filter by default', () => {
    render(<ChampionSelect />, mockedStaticProviderData);
    expect(screen.queryByRole('textbox')).toBeNull();
  });
  it('renders a filter when showFilter is set', () => {
    render(<ChampionSelect showFilter />, mockedStaticProviderData);
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
  it('renders only filtered results when a filter value is set', () => {
    render(<ChampionSelect showFilter />, mockedStaticProviderData);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeTruthy();
    expect(inputElement.textContent).toEqual('');
    fireEvent.keyPress(inputElement, { key: 'A', code: 'KeyA' });
    expect(screen.queryAllByTestId('champion-box').length).toEqual(3);
    fireEvent.change(inputElement, { target: { value: 'Ah' } });
    expect(screen.queryAllByTestId('champion-box').length).toEqual(1);
    fireEvent.change(inputElement, { target: { value: 'B' } });
    expect(screen.queryByTestId('champion-box')).toBeNull();
  });
});
