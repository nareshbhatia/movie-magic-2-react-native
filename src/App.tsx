/**
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeWindStyleSheet} from 'nativewind';
import {AuthStateContextProvider} from './contexts';
import {AppNavigator} from './navigators';

export function App() {
  // Override NativeWind's choice to set default text to 14px
  NativeWindStyleSheet.setVariables({'--rem': 16});

  return (
    <AuthStateContextProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </AuthStateContextProvider>
  );
}
