import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

const WelcomeButtons: React.FC<Props> = ({ navigation }) => (
  <>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('LoginScreen')}
      style={styles.button}
      labelStyle={styles.buttonText}
    >
      로그인
    </Button>

    <Button
      mode="contained"
      onPress={() => navigation.navigate('RegisterScreen')}
      style={styles.button}
      labelStyle={styles.buttonText}
    >
      회원가입
    </Button>
  </>
);

// Styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#009688',
    justifyContent: 'center',
    borderRadius: 2,
    elevation: 2,
    minWidth: 88,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    width: 271,
    height: 39,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default WelcomeButtons;
