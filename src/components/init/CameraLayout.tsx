import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/src/Camera.types';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  type: CameraType;
  setType: Dispatch<SetStateAction<CameraType>>;
  camera: Camera | null;
  setCamera: Dispatch<SetStateAction<Camera | null>>;
  setCameraView: Dispatch<SetStateAction<boolean>>;
  onTakePicture: () => void;
}

const CameraLayout: React.FC<Props> = ({
  type,
  setType,
  camera,
  setCamera,
  setCameraView,
  onTakePicture,
}) => (
  <View style={styles.container}>
    <Camera
      type={type}
      style={styles.camera}
      ref={(ref) => setCamera(ref)}
      ratio={'1:0.5'}
    >
      <TouchableOpacity
        onPress={() =>
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          )
        }
        style={styles.reverse}
      >
        <Ionicons name="camera-reverse-outline" size={60} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onTakePicture()} style={styles.shot}>
        <Ionicons name="ios-camera-outline" size={65} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCameraView(false)}
        style={styles.cancel}
      >
        <MaterialIcons name="cancel-presentation" size={40} color="white" />
      </TouchableOpacity>
    </Camera>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  reverse: {
    backgroundColor: '#00ab82',
    padding: 4,
    borderRadius: 50,
    margin: 25,
    width: 70,
  },
  shot: {
    backgroundColor: '#f92c2c',
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00ab82',
    width: 90,
    position: 'absolute',
    bottom: 25,
  },
  cancel: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
});

export default CameraLayout;
