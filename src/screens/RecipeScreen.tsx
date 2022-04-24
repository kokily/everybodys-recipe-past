import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/AppLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function RecipeScreen({ navigation }: Props) {
  return <AppLayout navigation={navigation}>RecipeScreen</AppLayout>;
}

export default RecipeScreen;
