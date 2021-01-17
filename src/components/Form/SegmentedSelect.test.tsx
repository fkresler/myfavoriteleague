import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '@/utils/testUtils';
import { SegmentedSelect } from './SegmentedSelect';

const defaultChoices = [
  {
    id: 'A',
    name: 'A',
    order: 5,
  },
  {
    id: 'B',
    name: 'B',
    order: 0,
  },
  {
    id: 'C',
    name: 'C',
    order: 3,
  },
  {
    id: 'D',
    name: 'D',
    order: 1,
  },
  {
    id: 'E',
    name: 'E',
    order: 8,
  },
];

describe('SegmentedSelect', () => {
  describe('General', () => {
    it('renders choices ordered by their provided order', () => {
      render(<SegmentedSelect choices={defaultChoices} />);
      const choiceList = screen.getByTestId('segmented-list');
      expect(choiceList.childNodes[0].textContent).toEqual('B');
      expect(choiceList.childNodes[1].textContent).toEqual('D');
      expect(choiceList.childNodes[2].textContent).toEqual('C');
      expect(choiceList.childNodes[3].textContent).toEqual('A');
      expect(choiceList.childNodes[4].textContent).toEqual('E');
    });
    it('calls the provided onSelect function whenever clicks happen', () => {
      const mockedOnSelect = jest.fn();
      render(<SegmentedSelect choices={defaultChoices} onChange={mockedOnSelect} />);
      fireEvent.click(screen.getByText('E'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('E');
      fireEvent.click(screen.getByText('A'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('A');
      fireEvent.click(screen.getByText('C'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('C');
      expect(mockedOnSelect).toHaveBeenCalledTimes(3);
    });
    it('does not call the provided function when clicking the active element', () => {
      const mockedOnSelect = jest.fn();
      render(<SegmentedSelect choices={defaultChoices} onChange={mockedOnSelect} />);
      fireEvent.click(screen.getByText('E'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('E');
      fireEvent.click(screen.getByText('A'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('A');
      fireEvent.click(screen.getByText('E'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('E');
      fireEvent.click(screen.getByText('E'));
      expect(mockedOnSelect).toHaveBeenLastCalledWith('E');
      expect(mockedOnSelect).toHaveBeenCalledTimes(3);
    });
    it('renders the first element as selected when no selection is provided', () => {
      render(<SegmentedSelect choices={defaultChoices} />);
      const selectedChoice = screen.getByTestId('choice-selected');
      const expectedChoice = screen.getByText('B');
      expect(selectedChoice).toEqual(expectedChoice);
    });
  });
  describe('Uncontrolled mode', () => {
    it('renders the initially selected choice as selected', () => {
      render(<SegmentedSelect choices={defaultChoices} initialSelectedId="E" />);
      const selectedChoice = screen.getByTestId('choice-selected');
      const expectedChoice = screen.getByText('E');
      expect(selectedChoice).toEqual(expectedChoice);
    });
    it('changes the selected node internally on selection', () => {
      render(<SegmentedSelect choices={defaultChoices} initialSelectedId="E" />);
      fireEvent.click(screen.getByText('A'));
      let selectedChoice = screen.getByTestId('choice-selected');
      let expectedChoice = screen.getByText('A');
      expect(selectedChoice).toEqual(expectedChoice);
      fireEvent.click(screen.getByText('B'));
      selectedChoice = screen.getByTestId('choice-selected');
      expectedChoice = screen.getByText('B');
      expect(selectedChoice).toEqual(expectedChoice);
    });
  });
  describe('Controlled mode', () => {
    it('renders the selected choice as selected', () => {
      render(<SegmentedSelect choices={defaultChoices} selectedId="E" />);
      const selectedChoice = screen.getByTestId('choice-selected');
      const expectedChoice = screen.getByText('E');
      expect(selectedChoice).toEqual(expectedChoice);
    });
    it('overwrites the uncontrolled mode behavior every time', () => {
      render(<SegmentedSelect choices={defaultChoices} initialSelectedId="A" selectedId="C" />);
      const selectedChoice = screen.getByTestId('choice-selected');
      const expectedChoice = screen.getByText('C');
      expect(selectedChoice).toEqual(expectedChoice);
    });
  });
});
