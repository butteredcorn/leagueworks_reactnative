import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MsgInput from "../../comps/msginput";
import CenterView from './CenterView';

storiesOf('MsgInput', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Message Input', () => (
      <MsgInput />
  ))
