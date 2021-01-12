import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '@/utils/testUtils';
import { ChampionSelect } from './ChampionSelect';

describe('ChampionSelect', () => {
  it('renders all available champions', () => {
    render(<ChampionSelect />);
    expect(screen.queryAllByTestId('champion-box').length).toEqual(3);
  });
  it('calls the onChange function when adding champions to the selection', () => {
    const debugSelectionChange = jest.fn();
    render(<ChampionSelect onChange={debugSelectionChange} />);
    expect(screen.queryAllByTestId('champion-box').length).toEqual(3);
    fireEvent.click(screen.queryAllByTestId('champion-box')[0]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(1);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox']);
    fireEvent.click(screen.queryAllByTestId('champion-box')[1]);
    expect(debugSelectionChange).toHaveBeenCalledTimes(2);
    expect(debugSelectionChange).toHaveBeenLastCalledWith(['Aatrox', 'Ahri']);
  });
  it('calls the onChange function when adding to and removing champions from the selection', () => {
    const debugSelectionChange = jest.fn();
    render(<ChampionSelect onChange={debugSelectionChange} />);
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
  it('does not call the onChange function when the champion is disabled', () => {
    const debugSelectionChange = jest.fn();
    render(
      <ChampionSelect disabledChampions={['Aatrox', 'Akali']} onChange={debugSelectionChange} />,
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
  it('does not render excluded champions', () => {
    render(<ChampionSelect excludedChampions={['Aatrox']} />);
    expect(screen.queryAllByTestId('champion-box').length).toEqual(2);
  });
  it('renders a submit button when an onSubmit function is provided', () => {
    render(<ChampionSelect onSubmit={jest.fn()} />);
    expect(screen.getByText('These are my champions!')).toBeTruthy();
  });
  it('calls the provided onSubmit function when the submit button is clicked', () => {
    const debugSubmit = jest.fn();
    render(<ChampionSelect onSubmit={debugSubmit} />);
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
    render(<ChampionSelect />);
    expect(screen.queryByRole('textbox')).toBeNull();
  });
  it('renders a filter when showFilter is set', () => {
    render(<ChampionSelect showFilter />);
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
  it('renders only filtered results when a filter value is set', () => {
    render(<ChampionSelect showFilter />);
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
