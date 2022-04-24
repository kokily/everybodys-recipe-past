import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function CostScreen({ navigation }: Props) {
  return (
    <AppLayout navigation={navigation}>
      <Text>CostScreen</Text>
    </AppLayout>
  );
}

export default CostScreen;
