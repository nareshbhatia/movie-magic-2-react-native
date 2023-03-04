import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export function Header() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn', {});
  };

  return (
    <View className="h-16 flex flex-row items-center px-4">
      <Text className="flex-1 text-3xl text-brand font-semibold">
        Movie Magic
      </Text>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}
