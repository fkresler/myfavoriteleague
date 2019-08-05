import React from 'react';
import { storiesOf } from '@storybook/react';

import ChampionInfoCard from './ChampionInfoCard';

const stories = storiesOf('Components', module);

stories.add('ChampionInfoCard Default', () => <ChampionInfoCard />);
