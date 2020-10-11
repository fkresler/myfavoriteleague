import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ITextInput, TextInput } from './TextInput';

const Template: Story<ITextInput> = (args) => <TextInput {...args} />;

export default {
  title: 'Components/Input/TextInput',
  component: TextInput,
  argTypes: {
    onChange: { action: 'changed' },
    onKeyPress: { action: 'key pressed' },
  },
  args: {
    label: 'Input Label',
    value: '',
    placeholder: 'Please enter something',
    hasError: false,
    isReadOnly: false,
    isDisabled: false,
    isRequired: false,
    hasAutoFocus: false,
  },
};

export const TextInputDefault = Template.bind({});
