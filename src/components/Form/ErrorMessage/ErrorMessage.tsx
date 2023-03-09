import * as React from 'react';
import {Text} from 'react-native';

interface ErrorMessageProps {
  error?: string;
}

export function ErrorMessage({error}: ErrorMessageProps) {
  return error !== undefined ? (
    <Text className="mt-1 text-base text-error">{error}</Text>
  ) : null;
}
