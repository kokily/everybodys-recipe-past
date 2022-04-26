import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { checkAPI } from '../api/auth';
import client from '../api/client';
import { useUserState } from '../context/UserContext';

function useAuthLoadEffect() {
  const [, setUser] = useUserState();
  const { mutate: check } = useMutation(checkAPI, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  useEffect(() => {
    const fetchingCookie = async () => {
      const accessToken = await AsyncStorage.getItem('access_token');
      const refreshToken = await AsyncStorage.getItem('refresh_token');

      if (accessToken && refreshToken) {
        console.log('체킹됨!');
        // @ts-ignore
        client.defaults.headers.Cookie = `access_token=${accessToken}; refresh_token=${refreshToken}`;
      } else {
        // @ts-ignore
        client.defaults.headers.Cookie = '';
      }
    };

    fetchingCookie();
    check();
  }, [setUser, check]);
}

export default useAuthLoadEffect;
