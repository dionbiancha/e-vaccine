import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const MainStack = createStackNavigator();

export default () =>  ( 
  <MainStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <MainStack.Screen  name="Welcome" component={Welcome}/>
    <MainStack.Screen  name="Home" component={Home}/>
  </MainStack.Navigator>
);