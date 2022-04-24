import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native-elements';
import AppLayout from '../components/common/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function RecipeScreen({ navigation }: Props) {
  return (
    <AppLayout navigation={navigation}>
      <Text>RecipeScreen</Text>
    </AppLayout>
  );
}

export default RecipeScreen;
