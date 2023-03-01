import * as React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TextInput, View} from 'react-native';
import * as yup from 'yup';
import {ErrorMessage} from '../../components/Form/ErrorMessage';
import {Credentials} from '../../models';

// TODO: fix ts-ignore
// @ts-ignore
const schema: yup.ObjectSchema<Credentials> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface SignInFormProps {
  onSubmit: (credentials: Credentials) => void;
}

export function SignInForm({onSubmit}: SignInFormProps) {
  const {control, formState, handleSubmit} = useForm<Credentials>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const {errors} = formState;

  return (
    <>
      <Text className="mt-6 text-center text-3xl font-bold tracking-tight">
        Sign in to your account
      </Text>

      <View className="mt-8">
        <View className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <View className="space-y-6">
            <Text>Email address</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <ErrorMessage error={errors.email.message} />}

            <Text>Password</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && (
              <ErrorMessage error={errors.password.message} />
            )}

            <View>
              <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
