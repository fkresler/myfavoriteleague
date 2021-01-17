import React from 'react';
import { Story } from '@storybook/react';
import { ICard, Card } from './Card';

const Template: Story<ICard> = (args) => <Card {...args}>Some content</Card>;

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    headline: 'Headline',
    subHeadline: 'Sub-Headline',
  },
};

export const CardDefault = Template.bind({});

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  footer: <div>This is footer content</div>,
};
