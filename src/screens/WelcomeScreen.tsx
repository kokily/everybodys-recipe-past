import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../components/welcome/Welcome';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function WelcomeScreen({ navigation }: Props) {
  return <Welcome navigation={navigation} />;
}

export default WelcomeScreen;
