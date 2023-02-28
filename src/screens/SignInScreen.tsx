import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

export function SignInScreen() {
  return (
    <SafeAreaView className="flex-1 bg-default">
      <View className="flex-1 p-4">
        <Text className="text-3xl">Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
