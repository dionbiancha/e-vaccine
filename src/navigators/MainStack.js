import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from '../screens/Loading';
import Home from '../screens/Home';
import MoreButtom from '../components/header/MoreButtom';

const MainStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  },
});

export default (props) =>  ( 
  <MainStack.Navigator screenOptions={{
    cardStyleInterpolator: forFade
  }}>
    <MainStack.Screen  
      name="Loading" 
      component={Loading} 
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen  
      name="Home" 
      component={Home} 
      options={{
        title: 'Covid-404',
        headerLeft: null, 
        headerRight: () => <MoreButtom />,
        gesturesEnabled: false,
        headerTitleAlign: 'center',
         
      }}
      />
  </MainStack.Navigator>
);