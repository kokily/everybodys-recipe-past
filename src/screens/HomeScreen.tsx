import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function HomeScreen({ navigation }: Props) {
  return (
    <AppLayout navigation={navigation}>
      <Text>HomeScreen</Text>
    </AppLayout>
  );
}

export default HomeScreen;
