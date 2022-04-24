import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function HomeScreen({ navigation }: Props) {
  return <AppLayout navigation={navigation}>HomeScreen</AppLayout>;
}

export default HomeScreen;
