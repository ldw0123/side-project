import React from 'react';
import { action } from '@storybook/addon-actions';
import Flexlayout from './page';

export default {
  component: Flexlayout,
  title: 'Flexlayout',
};

export const layoutData = {
  id: 1,
  title: 'test layoutData',
  stata: 'test_layout',
  updtaAt: new Date(2024, 8, 5, 23),
};

export const actionData = {
  onPinTask: action('onPinTask'),
  onArchiveTash: action('onArchiveTest'),
};

export const Default = () => (
  // <Flexlayout layout={{ ...layoutData }} {...actionData} />
);
