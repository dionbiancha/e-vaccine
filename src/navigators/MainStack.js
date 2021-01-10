import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';

const MainStack = createStackNavigator();

export default () =>  ( 
  <MainStack.Navigator>
    <MainStack.Screen  name="Welcome" component={Welcome}/>
  </MainStack.Navigator>
);