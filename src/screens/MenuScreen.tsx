import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function MenuScreen({ navigation }: Props) {
  return <AppLayout navigation={navigation}>MenuScreen</AppLayout>;
}

export default MenuScreen;
