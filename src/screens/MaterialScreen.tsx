import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function MaterialScreen({ navigation }: Props) {
  return <AppLayout navigation={navigation}>MaterialScreen</AppLayout>;
}

export default MaterialScreen;
