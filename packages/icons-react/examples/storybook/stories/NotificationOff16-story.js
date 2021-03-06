import React from 'react';
import { storiesOf } from '@storybook/react';
import NotificationOff16 from '../../../lib/NotificationOff/16';

storiesOf('NotificationOff16', module)
  .add('default', () => <NotificationOff16 />)
  .add('with accessibility label', () => (
    <NotificationOff16 aria-label="Accessibility label" />
  ))
  .add('with title', () => (
    <NotificationOff16 focusable>
      <title>Icon title</title>
    </NotificationOff16>
  ));
