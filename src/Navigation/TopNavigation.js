import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import All from '../screens/All';
import Completed from '../screens/Completed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const TopNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.main}>
      <Tab.Navigator>
        <Tab.Screen name="PENDING" component={All} />
        <Tab.Screen name="COMPLETED" component={Completed} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
  },
});
export default TopNavigation;
