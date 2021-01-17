import React from 'react';
import { Story } from '@storybook/react';
import { Loader } from './Loader';

const Template: Story<{}> = () => <Loader />;

export default {
  title: 'Components/Loader',
  component: Loader,
};

export const DefaultLoader = Template.bind({});
