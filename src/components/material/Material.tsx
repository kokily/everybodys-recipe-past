import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialsList from './MaterialsList';
import Recipe from './Recipe';

interface Props {
  recipe: RecipeType | undefined;
  main: MaterialType[];
  sub: MaterialType[];
  source: MaterialType[];
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  onAddRecipe: () => void;
  onRemove: (materialId: string) => void;
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

const Material: React.FC<Props> = ({
  recipe,
  main,
  sub,
  source,
  content,
  setContent,
  onAddRecipe,
  onRemove,
  update,
  setUpdate,
}) => (
  <View style={styles.container}>
    {recipe && (
      <>
        <Text style={styles.title}>{recipe.title}</Text>

        <View style={styles.contents}>
          <Text style={styles.content}>식재료/레시피</Text>
          <Text style={styles.content}>{recipe.serving} 인분</Text>
        </View>

        <ScrollView style={styles.list}>
          <MaterialsList data={main} onRemove={onRemove} divide="주재료" />
          <MaterialsList data={sub} onRemove={onRemove} divide="부재료" />
          <MaterialsList data={source} onRemove={onRemove} divide="소스" />
          <Recipe
            recipe={recipe}
            content={content}
            setContent={setContent}
            onAddRecipe={onAddRecipe}
            update={update}
            setUpdate={setUpdate}
          />
        </ScrollView>
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ab82',
    marginBottom: 15,
  },
  contents: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#417eb2',
  },
  list: {
    width: '95%',
    marginTop: 15,
  },
});

export default Material;
