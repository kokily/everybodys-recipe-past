import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function InitScreen({ navigation }: Props) {
  return <AppLayout navigation={navigation}>InitScreen</AppLayout>;
}

export default InitScreen;
