import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { useUserState } from '../context/UserContext';
import { useMutation } from 'react-query';
import { loginAPI, logoutAPI, registerAPI } from '../api/auth';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  mode?: 'login' | 'register';
}

function useAuth({ navigation, mode }: Props) {
  const [, setUser] = useUserState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const { mutate: login } = useMutation(loginAPI, {
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (err: any) => {
      setError(err);
    },
  });
  const { mutate: register } = useMutation(registerAPI, {
    onSuccess: () => {
      navigation.push('LoginScreen');
    },
  });
  const { mutate: logout } = useMutation(logoutAPI, {
    onSuccess: () => {
      setUser(null);
    },
  });

  const onSubmit = useCallback(() => {
    if ([username, password].includes('')) {
      alert('빈 칸 없이 입력해주세요.');
      return;
    }

    if (mode === 'login') {
      login({ username, password });
    } else {
      register({ username, password });
    }
  }, [login, register, username, password]);

  const onLogout = useCallback(() => {
    logout();
  }, []);

  return {
    username,
    password,
    setUsername,
    setPassword,
    onSubmit,
    onLogout,
    error,
  };
}

export default useAuth;
