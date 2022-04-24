import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function MenuScreen({ navigation }: Props) {
  return (
    <AppLayout navigation={navigation}>
      <Text>MenuScreen</Text>
    </AppLayout>
  );
}

export default MenuScreen;
