// eslint-disable-next-line no-unused-vars
import {View, Text} from 'react-native';
import React from 'react';
import TodoInput from '../screens/TodoInput';
import TodoDisplay from '../screens/TodoDisplay';
import Icons from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Input"
          component={TodoInput}
          options={{tabBarIcon: () => <Icons name="plus-circle" size={30} />}}
        />
        <Tab.Screen
          name="Display"
          component={TodoDisplay}
          options={{
            tabBarIcon: () => <Icons name="columns" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
