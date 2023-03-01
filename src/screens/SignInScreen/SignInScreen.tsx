import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {useAuthStateContext} from '../../contexts';
import {Credentials, User} from '../../models';
import {SignInForm} from './SignInForm';

export function SignInScreen() {
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
  };

  return (
    <SafeAreaView className="flex-1 bg-default">
      <View className="p-4">
        <SignInForm onSubmit={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
