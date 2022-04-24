import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainNavigation from './MainNavigation';
import LoginNavigation from './LoginNavigation';
import { useUserState } from '../context/UserContext';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';

function Navigation() {
  useAuthLoadEffect();
  const [user] = useUserState();

  return (
    <NavigationContainer>
      {user ? <MainNavigation /> : <LoginNavigation />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default Navigation;
