import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';
import useBack from '../hooks/useBack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function CostScreen({ navigation }: Props) {
  const { onBack } = useBack({ navigation });

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <Text>CostScreen</Text>
    </AppLayout>
  );
}

export default CostScreen;
