import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native';
import {Screen} from '../../components/Screen';
import {useAuthStateContext} from '../../contexts';
import {Credentials, User} from '../../models';
import {AppStackParamList} from '../../navigators';
import {SignInForm} from './SignInForm';

type SignInScreenProps = NativeStackScreenProps<AppStackParamList, 'SignIn'>;

export function SignInScreen({navigation}: SignInScreenProps) {
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
    navigation.navigate('Top10Movies');
  };

  return (
    <Screen>
      <ScrollView className="p-4">
        <SignInForm onSubmit={handleSubmit} />
      </ScrollView>
    </Screen>
  );
}
