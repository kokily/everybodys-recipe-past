import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {
  recipe: RecipeType;
  onMenu: (id: string) => void;
}

const RecipeItem: React.FC<Props> = ({ recipe, onMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contents}
        onPress={() => onMenu(recipe.id)}
      >
        <Image source={{ uri: recipe.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.text}>{recipe.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    height: 70,
  },
  thumbnail: {
    width: 50,
    height: 45,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default RecipeItem;
