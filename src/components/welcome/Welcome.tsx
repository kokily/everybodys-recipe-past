import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import WelcomeButtons from './WelcomeButtons';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

const Welcome: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>모두의 레시피</Text>

    <Image
      source={require('../../assets/welcome.png')}
      resizeMode="contain"
      style={styles.image}
    />

    <Text style={styles.content}>자신만의 레시피를 기록해 보세요</Text>

    <WelcomeButtons navigation={navigation} />

    <Text style={styles.copyright}>Copyright(c), 2022, D&K Dream</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ab82',
  },
  image: {
    width: 312,
    height: 280,
    marginTop: 30,
  },
  content: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ab82',
    marginTop: 24,
  },
  copyright: {
    fontSize: 18,
    color: '#121212',
    marginTop: 24,
  },
});

export default Welcome;
