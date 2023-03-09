/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeWindStyleSheet} from 'nativewind';
import {AuthStateContextProvider} from './contexts';
import {HomeScreen, SignInScreen, Top10MoviesScreen} from './screens';

type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  Top10Movies: undefined;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator<RootStackParamList>();
  // Override NativeWind's choice to set default text to 14px
  NativeWindStyleSheet.setVariables({'--rem': 16});

  return (
    <AuthStateContextProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
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
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthStateContextProvider>
  );
}

export default App;
