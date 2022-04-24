import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AuthTemplate from '../components/AuthTemplate';
import useAuth from '../hooks/useAuth';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function RegisterScreen({ navigation }: Props) {
  const { username, password, setUsername, setPassword, onSubmit } = useAuth({
    navigation,
    mode: 'register',
  });

  return (
    <AuthTemplate
      mode="register"
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
}

export default RegisterScreen;
