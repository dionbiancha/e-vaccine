import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const MainStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default () =>  ( 
  <MainStack.Navigator screenOptions={{
    headerShown: false,
    cardStyleInterpolator: forFade
  }}>
    <MainStack.Screen  name="Welcome" component={Welcome}/>
    <MainStack.Screen  name="Home" component={Home}/>
  </MainStack.Navigator>
);