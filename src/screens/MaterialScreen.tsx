import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/common/AppLayout';
import Material from '../components/material/Material';
import useBack from '../hooks/useBack';
import useMaterial from '../hooks/useMaterial';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function MaterialScreen({ navigation }: Props) {
  const {
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
  } = useMaterial();
  const { onBack } = useBack({ navigation });

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <Material
        recipe={recipe}
        main={main}
        sub={sub}
        source={source}
        content={content}
        setContent={setContent}
        onAddRecipe={onAddRecipe}
        onRemove={onRemove}
        update={update}
        setUpdate={setUpdate}
      />
    </AppLayout>
  );
}

export default MaterialScreen;
