/**
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SignInScreen, Top10MoviesScreen} from '../screens';

export type AppStackParamList = {
  Home: undefined;
  SignIn: undefined;
  Top10Movies: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="Top10Movies"
        component={Top10MoviesScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
