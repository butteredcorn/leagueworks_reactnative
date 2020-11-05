import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MsgInput from "../../comps/msginput";
import CenterView from './CenterView';
import MyCalendar from "../../comps/calendar";

storiesOf('Calendar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Calendar', () => (
      <MyCalendar />
  ))
