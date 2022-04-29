import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addCostRecipeAPI, readRecipeAPI } from '../api/recipes';

function useCost() {
  const queryClient = useQueryClient();
  const route = useRoute();
  const { id }: any = route.params;
  const { mutate: addCostRecipe } = useMutation(addCostRecipeAPI, {
    onSuccess: () => queryClient.invalidateQueries('recipe'),
  });
  const { data: recipe } = useQuery('recipe', () => readRecipeAPI(id), {
    enabled: true,
    onSuccess: (data) => {
      let all_cost = 0;
      data.materials.map((material) => {
        all_cost += parseInt(material.price) * material.usage;
      });
      setAllCost(all_cost);

      if (data.all_price) {
        setAllPrice(data.all_price.toString());
      }
    },
  });
  const [allCost, setAllCost] = useState(0);
  const [allPrice, setAllPrice] = useState('');
  const [updatePrice, setUpdatePrice] = useState(false);

  const onAddCostRecipe = useCallback(() => {
    if (allPrice === '' || allCost === 0) {
      Alert.alert('제공 가격을 입력하세요');
      return;
    }

    addCostRecipe({ id, all_cost: allCost, all_price: parseInt(allPrice) });
  }, [allPrice, allCost, addCostRecipe]);

  return {
    recipe,
    allCost,
    allPrice,
    setAllPrice,
    onAddCostRecipe,
    updatePrice,
    setUpdatePrice,
  };
}

export default useCost;
