/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from './src/Navigation/BottomNavigation';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
};

export default App;
