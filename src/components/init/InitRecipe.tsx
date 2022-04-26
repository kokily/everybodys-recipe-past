import type { CameraType } from 'expo-camera/src/Camera.types';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import CameraLayout from './CameraLayout';
import RecipeInputs from './RecipeInputs';
import Thumbnail from './Thumbnail';

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
  loading: boolean;
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
  loading,
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

        <Thumbnail
          thumbnail={inits.thumbnail}
          onPickImage={onPickImage}
          hasPermission={hasPermission}
          cameraView={cameraView}
          setCameraView={setCameraView}
          onRemoveImage={onRemoveImage}
          loading={loading}
        />

        {inits.title != '' &&
          inits.serving !== '' &&
          inits.thumbnail !== '' && (
            <Button
              title="레시피 등록하기"
              onPress={onInitRecipe}
              buttonStyle={{ backgroundColor: '#00ab82' }}
              titleStyle={{ fontSize: 18 }}
            />
          )}
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
