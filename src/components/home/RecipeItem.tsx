import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Badge } from 'react-native-elements';
import { Card } from 'react-native-paper';

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
        <Card.Title
          title={
            recipe.title.length > 15
              ? `${recipe.title.slice(14)}...`
              : recipe.title
          }
          subtitle={`${recipe.serving}인분`}
          left={(props) => (
            <Image
              source={{ uri: recipe.thumbnail }}
              {...props}
              style={styles.thumbnail}
            />
          )}
          right={(props) => (
            <Text>
              재료{' '}
              {recipe.materials && recipe.materials.length > 0 ? (
                <Badge {...props}>{recipe.materials.length}</Badge>
              ) : (
                0
              )}
              개
            </Text>
          )}
          style={{ width: '100%' }}
        />
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingHorizontal: 10,
  },
  thumbnail: {
    width: 50,
    height: 60,
  },
});

export default RecipeItem;
