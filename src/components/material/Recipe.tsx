import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Card, Text } from 'react-native-elements';

interface Props {
  recipe: RecipeType;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  onAddRecipe: () => void;
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

const Recipe: React.FC<Props> = ({
  recipe,
  content,
  setContent,
  onAddRecipe,
  update,
  setUpdate,
}) => (
  <View style={styles.container}>
    {recipe.content ? (
      update ? (
        <View style={styles.content}>
          <Input
            numberOfLines={10}
            multiline={true}
            placeholder="레시피 내용"
            autoCapitalize="none"
            value={content}
            onChangeText={(text) => setContent(text)}
            containerStyle={{ marginTop: 10 }}
            inputStyle={styles.input}
          />
          <View style={{ flexDirection: 'row' }}>
            <Button
              title="취소"
              onPress={() => setUpdate(false)}
              containerStyle={{ marginRight: 15 }}
            />
            <Button
              title="레시피 저장"
              onPress={() => {
                onAddRecipe();
                setUpdate(false);
              }}
            />
          </View>
        </View>
      ) : (
        <View
          style={styles.content}
          onTouchStart={() => {
            setContent(recipe.content);
            setUpdate(true);
          }}
        >
          <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>레시피</Card.Title>
            <Card.Divider />
            <Text>{recipe.content}</Text>
          </Card>
        </View>
      )
    ) : (
      <View style={styles.content}>
        <Input
          numberOfLines={10}
          placeholder="레시피 내용"
          autoCapitalize="none"
          value={content}
          onChangeText={(text) => setContent(text)}
          containerStyle={{ marginTop: 10 }}
          inputStyle={styles.input}
        />
        <Button title="레시피 등록" onPress={onAddRecipe} />
      </View>
    )}
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  content: {
    width: '100%',
    minHeight: 100,
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    fontSize: 15,
    textAlignVertical: 'top',
    backgroundColor: '#cfe6df',
    padding: 10,
  },
  card: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default Recipe;
