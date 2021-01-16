import React from 'react';
import { Story } from '@storybook/react';
import { INotification, Notification } from './Notification';

const Template: Story<INotification> = (args) => <Notification {...args} />;

export default {
  title: 'Components/Notification',
  component: Notification,
  args: {
    variant: 'default',
    children: 'This is some random notification text',
  },
};

export const NotificationDefault = Template.bind({});
