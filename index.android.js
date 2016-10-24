import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/pages/Login';
import News from './src/pages/News';
import Gallery from './src/pages/Gallery';
import Calendar from './src/pages/Calendar';

export default class ReactNativeCommonScreens extends Component {
  render() {
    return (
      <Calendar />
    );
  }
}

AppRegistry.registerComponent('ReactNativeCommonScreens', () => ReactNativeCommonScreens);
