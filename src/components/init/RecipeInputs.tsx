import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

interface Props {
  inits: InitType;
  setInits: Dispatch<SetStateAction<InitType>>;
}

const RecipeInputs: React.FC<Props> = ({ inits, setInits }) => (
  <View style={styles.container}>
    <Input
      placeholder="레시피 이름"
      textContentType="name"
      autoCapitalize="none"
      value={inits.title}
      onChangeText={(text) => setInits({ ...inits, title: text })}
    />
    <Input
      placeholder="인분 수"
      textContentType="none"
      autoCapitalize="none"
      keyboardType="phone-pad"
      value={inits.serving}
      onChangeText={(text) => setInits({ ...inits, serving: text })}
    />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 15,
  },
});

export default RecipeInputs;
