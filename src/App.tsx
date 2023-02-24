/**
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-default">
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View className="flex-1 p-4">
          <Text className="text-3xl">Hello World</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
