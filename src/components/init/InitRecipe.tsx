import React, { Dispatch, SetStateAction } from 'react';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/src/Camera.types';
import { StyleSheet, View } from 'react-native';
import CameraLayout from './CameraLayout';
import { Text } from 'react-native-elements';
import RecipeInputs from './RecipeInputs';

interface Props {
  inits: InitType;
  setInits: Dispatch<SetStateAction<InitType>>;
  onBack: () => void;
  onInitRecipe: () => void;
  onPickImage: () => void;
  onRemoveImage: () => void;
  onTakePicture: () => void;
  hasPermission: boolean;
  type: CameraType;
  setType: Dispatch<SetStateAction<CameraType>>;
  camera: Camera | null;
  setCamera: Dispatch<SetStateAction<Camera | null>>;
  cameraView: boolean;
  setCameraView: Dispatch<SetStateAction<boolean>>;
}

const InitRecipe: React.FC<Props> = ({
  inits,
  setInits,
  onBack,
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
}) => (
  <View style={styles.container}>
    {cameraView ? (
      <CameraLayout
        type={type}
        setType={setType}
        camera={camera}
        setCamera={setCamera}
        setCameraView={setCameraView}
        onTakePicture={onTakePicture}
      />
    ) : (
      <>
        <Text h3 h3Style={styles.title}>
          레시피 기본정보 입력
        </Text>

        <RecipeInputs inits={inits} setInits={setInits} />
      </>
    )}
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#00ab82',
  },
});

export default InitRecipe;
