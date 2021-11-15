import React from 'react';
import { screen, uiRender as render } from '@/utils/testUtils';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

const mockedOptions = [
  {
    id: 'first',
    description: 'First',
  },
  {
    id: 'second',
    description: 'Second',
  },
  {
    id: 'third',
    description: 'Third',
  },
];

describe('Select', () => {
  it('renders a select with the provided options', () => {
    render(<Select options={mockedOptions} />);
    expect(screen.getByTestId('first')).toBeTruthy();
    expect(screen.getByTestId('second')).toBeTruthy();
    expect(screen.getByTestId('third')).toBeTruthy();
  });
  it('selects the first element by default', () => {
    render(<Select options={mockedOptions} />);
    expect(screen.getByDisplayValue('First')).toBeTruthy();
    expect(screen.queryByDisplayValue('Second')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('selects the provided selected element when valid', () => {
    render(<Select options={mockedOptions} selectedId="second" />);
    expect(screen.getByDisplayValue('Second')).toBeTruthy();
    expect(screen.queryByDisplayValue('First')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('selects the first element when the provided selected id is invalid', () => {
    render(<Select options={mockedOptions} selectedId="Invalid" />);
    expect(screen.getByDisplayValue('First')).toBeTruthy();
    expect(screen.queryByDisplayValue('Second')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('renders the placeholder when provided one', () => {
    render(<Select options={mockedOptions} placeholder="Im a placeholder" />);
    expect(screen.getByTestId('select-placeholder')).toBeTruthy();
  });
  it('renders the placeholder as selected option when no selection is provided', () => {
    render(<Select options={mockedOptions} placeholder="Im a placeholder" />);
    expect(screen.getByDisplayValue('Im a placeholder')).toBeTruthy();
    expect(screen.queryByDisplayValue('First')).toBeNull();
    expect(screen.queryByDisplayValue('Second')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('renders the selected option over the placeholder when a valid selection is provided', () => {
    render(<Select options={mockedOptions} placeholder="Im a placeholder" selectedId="first" />);
    expect(screen.getByDisplayValue('First')).toBeTruthy();
    expect(screen.queryByDisplayValue('Im a placeholder')).toBeNull();
    expect(screen.queryByDisplayValue('Second')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('renders the placeholder when the selected option is not valid', () => {
    render(<Select options={mockedOptions} placeholder="Im a placeholder" selectedId="fourth" />);
    expect(screen.getByDisplayValue('Im a placeholder')).toBeTruthy();
    expect(screen.queryByDisplayValue('First')).toBeNull();
    expect(screen.queryByDisplayValue('Second')).toBeNull();
    expect(screen.queryByDisplayValue('Third')).toBeNull();
  });
  it('calls the provided onChange function on selecting options', () => {
    const testOnChange = jest.fn();
    render(
      <Select
        options={mockedOptions}
        placeholder="Im a placeholder"
        selectedId="first"
        onChange={testOnChange}
        customTestId="select"
      />,
    );
    userEvent.selectOptions(screen.getByTestId('select'), screen.getByText('Second'));
    expect(testOnChange).toHaveBeenCalledTimes(1);
    expect(testOnChange).toHaveBeenCalledWith('second');
  });
});
