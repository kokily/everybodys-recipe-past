import { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Snackbar } from 'react-native-paper';
import Calcul from './Calcul';
import CostMaterialsList from './CostMaterialsList';

interface Props {
  recipe: RecipeType | undefined;
  allCost: number;
  allPrice: string;
  setAllPrice: Dispatch<SetStateAction<string>>;
  onAddCostRecipe: () => void;
  updatePrice: boolean;
  setUpdatePrice: Dispatch<SetStateAction<boolean>>;
}

const Cost: React.FC<Props> = ({
  recipe,
  allCost,
  allPrice,
  setAllPrice,
  onAddCostRecipe,
  updatePrice,
  setUpdatePrice,
}) => {
  const [visible, setVisible] = useState(recipe?.all_price !== null);

  return (
    <View style={styles.container}>
      {recipe && (
        <>
          <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
            제공 가격을 터치하시면 수정할 수 있습니다.
          </Snackbar>

          <Text style={styles.title}>{recipe.title}</Text>

          <Calcul
            recipe={recipe}
            allCost={allCost}
            allPrice={allPrice}
            setAllPrice={setAllPrice}
            onAddCostRecipe={onAddCostRecipe}
            updatePrice={updatePrice}
            setUpdatePrice={setUpdatePrice}
          />

          <ScrollView style={styles.scroll}>
            <CostMaterialsList materials={recipe.materials} />
          </ScrollView>
        </>
      )}
    </View>
  );
};

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
    marginBottom: 10,
  },
  scroll: {
    width: '100%',
  },
});

export default Cost;
