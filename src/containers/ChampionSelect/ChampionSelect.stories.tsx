import React from 'react';
import { Story } from '@storybook/react';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import StaticChampionMock from '@/mocks/StaticChampionDataMock';
import { IChampionSelect, ChampionSelect } from './ChampionSelect';

const Template: Story<IChampionSelect> = (args) => <ChampionSelect {...args} />;

export default {
  title: 'Containers/ChampionSelect',
  component: ChampionSelect,
  decorators: [
    (StoryComp: any) => (
      <StaticLeagueProvider championData={StaticChampionMock}>
        <StoryComp />
      </StaticLeagueProvider>
    ),
  ],
  argTypes: {
    onChange: { action: 'changed' },
    onSubmit: { action: 'submitted' },
  },
  args: {
    initialSelection: ['Akali'],
    disabledChampions: ['Ahri'],
    excludedChampions: [],
    showFilter: true,
  },
};

export const ChampionSelectDefault = Template.bind({});
