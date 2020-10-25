import React from 'react';
import { Story } from '@storybook/react';
import StaticContent from '@/mocks/StaticContent';
import { IModal, Modal } from './Modal';

const Template: Story<IModal> = (args) => <Modal {...args}>{StaticContent}</Modal>;

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onRequestClose: { action: 'request closing' },
  },
  args: {
    isOpen: true,
    title: 'Modalbox Title',
  },
};

export const ModalboxDefault = Template.bind({});
