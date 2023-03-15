import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {AppStackParamList} from '../../navigators';
import {Button} from '../Button';

type NavigationProps = NativeStackScreenProps<AppStackParamList>;

export function Header() {
  const navigation = useNavigation<NavigationProps>();

  const handleSignIn = () => {
    // TODO: Why TS2339: Property 'navigate' does not exist on type 'NavigationProps'.
    navigation.navigate('SignIn');
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
