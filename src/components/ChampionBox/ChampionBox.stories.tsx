import React from 'react';
import { Story } from '@storybook/react';
import StaticLeagueProvider from '@/providers/StaticLeagueProvider';
import StaticChampionMock from '@/mocks/StaticChampionDataMock';
import { IChampionBox, ChampionBox } from './ChampionBox';

const Template: Story<IChampionBox> = (args) => <ChampionBox {...args} />;

export default {
  title: 'Components/ChampionBox',
  component: ChampionBox,
  decorators: [
    (StoryComp: any) => (
      <StaticLeagueProvider championData={StaticChampionMock}>
        <StoryComp />
      </StaticLeagueProvider>
    ),
  ],
  argTypes: {
    championId: {
      control: {
        type: 'select',
        options: ['Aatrox', 'Ahri', 'Akali'],
      },
    },
    onClick: { action: 'clicked' },
  },
  args: {
    championId: 'Aatrox',
    info: 'Im a champion',
    isRounded: false,
    isHighlighted: false,
    isDisabled: false,
  },
};

export const ChampionBoxDefault = Template.bind({});
