import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function InitScreen({ navigation }: Props) {
  return (
    <AppLayout navigation={navigation}>
      <Text>InitScreen</Text>
    </AppLayout>
  );
}

export default InitScreen;
