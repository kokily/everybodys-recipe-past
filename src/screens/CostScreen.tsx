import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/common/AppLayout';
import Cost from '../components/cost/Cost';
import useBack from '../hooks/useBack';
import useCost from '../hooks/useCost';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function CostScreen({ navigation }: Props) {
  const { onBack } = useBack({ navigation });
  const {
    recipe,
    allCost,
    allPrice,
    setAllPrice,
    onAddCostRecipe,
    updatePrice,
    setUpdatePrice,
  } = useCost();

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <Cost
        recipe={recipe}
        allCost={allCost}
        allPrice={allPrice}
        setAllPrice={setAllPrice}
        onAddCostRecipe={onAddCostRecipe}
        updatePrice={updatePrice}
        setUpdatePrice={setUpdatePrice}
      />
    </AppLayout>
  );
}

export default CostScreen;
