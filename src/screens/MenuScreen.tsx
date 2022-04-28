import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/common/AppLayout';
import Menu from '../components/menu/Menu';
import useBack from '../hooks/useBack';
import useMenu from '../hooks/useMenu';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function MenuScreen({ navigation }: Props) {
  const {
    recipe,
    banner,
    setBanner,
    onMaterial,
    onCost,
    onAddMaterial,
    onRemoveRecipe,
    onPickImage,
  } = useMenu({ navigation });
  const { onBack } = useBack({ navigation });

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <Menu
        recipe={recipe}
        banner={banner}
        setBanner={setBanner}
        onMaterial={onMaterial}
        onCost={onCost}
        onAddMaterial={onAddMaterial}
        onRemoveRecipe={onRemoveRecipe}
        onPickImage={onPickImage}
      />
    </AppLayout>
  );
}

export default MenuScreen;
