import React from 'react';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';
import { Text } from 'react-native-elements';
import HomeStack from './homeStack';

export default function RootNavigation() {
  const { user, loading } = useAuthentication();

  return loading ? <Text>Loading</Text> :
    user ? <HomeStack /> : <AuthStack />;
}
