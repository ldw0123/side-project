import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Flexlayout from './page';

export default {
  component: Flexlayout,
  title: 'Flexlayout',
} as Meta;

const Template: StoryFn = (args) => <Flexlayout {...args} />;

export const Default = Template.bind({});
Default.args = {};
