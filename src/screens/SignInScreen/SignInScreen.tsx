import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {useAuthStateContext} from '../../contexts';
import {Credentials, User} from '../../models';
import {Screen} from '../../components/Screen';
import {SignInForm} from './SignInForm';

export function SignInScreen() {
  const navigation = useNavigation();
  const {authState, setAuthState} = useAuthStateContext();

  const handleSubmit = async (credentials: Credentials) => {
    console.log('----> signin', credentials);
    const user: User = {
      id: 'paul-silva',
      email: credentials.email,
      name: 'Paul Silva',
      photoUrl:
        'https://images.unsplash.com/photo-1568585105565-e372998a195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    };
    setAuthState({...authState, user});
    navigation.navigate('Top10Movies', {});
  };

  return (
    <Screen>
      <View className="p-4">
        <SignInForm onSubmit={handleSubmit} />
      </View>
    </Screen>
  );
}
