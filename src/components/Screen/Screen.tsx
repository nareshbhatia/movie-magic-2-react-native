import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, useColorScheme} from 'react-native';

interface ScreenProps {
  children?: React.ReactNode;
}

export function Screen({children}: ScreenProps) {
  const isDarkMode = useColorScheme() === 'dark';

  // TODO: should "mx-auto max-w-7xl" be removed from <SafeAreaView>
  //  This is only use by home page
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="bg-default flex-1 mx-auto max-w-7xl">
        {children}
      </SafeAreaView>
    </>
  );
}
