import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Loading from '../screens/Loading';
import Home from '../screens/Home';

const MainStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  },
});

export default () =>  ( 
  <MainStack.Navigator screenOptions={{
    cardStyleInterpolator: forFade
  }}>
    <MainStack.Screen  name="Loading" component={Loading} options={{headerShown: false}}/>
    <MainStack.Screen  name="Home" component={Home} options={{headerLeft: null, gesturesEnabled: false}}/>
  </MainStack.Navigator>
);