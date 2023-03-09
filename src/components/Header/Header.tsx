import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {Button} from '../Button';

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
      <Button onPress={handleSignIn}>Sign in</Button>
    </View>
  );
}
