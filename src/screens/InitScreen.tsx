import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/common/AppLayout';
import InitRecipe from '../components/init/InitRecipe';
import useBack from '../hooks/useBack';
import useInit from '../hooks/useInit';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function InitScreen({ navigation }: Props) {
  const {
    inits,
    setInits,
    onInitRecipe,
    onPickImage,
    onRemoveImage,
    onTakePicture,
    hasPermission,
    type,
    setType,
    camera,
    setCamera,
    cameraView,
    setCameraView,
    loading,
  } = useInit({ navigation });
  const { onBack } = useBack({ navigation });

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <InitRecipe
        inits={inits}
        setInits={setInits}
        onInitRecipe={onInitRecipe}
        onPickImage={onPickImage}
        onRemoveImage={onRemoveImage}
        onTakePicture={onTakePicture}
        hasPermission={hasPermission}
        type={type}
        setType={setType}
        camera={camera}
        setCamera={setCamera}
        cameraView={cameraView}
        setCameraView={setCameraView}
        loading={loading}
      />
    </AppLayout>
  );
}

export default InitScreen;
