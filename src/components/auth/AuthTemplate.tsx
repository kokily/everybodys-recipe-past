import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

interface Props {
  mode: 'login' | 'register';
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}

const AuthTemplate: React.FC<Props> = ({
  mode,
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
}) => {
  const text = mode === 'login' ? '로그인' : '회원가입';

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{text}</Title>

      <TextInput
        label="아이디"
        value={username}
        onChangeText={setUsername}
        mode="outlined"
        autoComplete="none"
        style={styles.input}
      />

      <TextInput
        label="비밀번호"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        autoComplete="none"
        style={styles.input}
        secureTextEntry={true}
        right={<TextInput.Icon name="eye" size={16} />}
      />

      <Button
        mode="contained"
        labelStyle={styles.buttonText}
        style={styles.button}
        onPress={onSubmit}
      >
        {text}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ab82',
    letterSpacing: 5,
  },
  error: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff0000',
  },
  errorMsg: {
    color: '#fff',
  },
  inputGroup: {
    width: '80%',
  },
  input: {
    marginTop: 10,
    width: 271,
    height: 39,
    textAlignVertical: 'center',
  },
  button: {
    marginTop: 10,
    width: 271,
    backgroundColor: '#009688',
  },
  buttonText: {
    fontSize: 18,
  },
  holder: {
    color: '#d54826ff',
  },
});

export default AuthTemplate;
