import React, { Dispatch, SetStateAction } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  thumbnail: string | null;
  onPickImage: () => void;
  hasPermission: boolean;
  cameraView: boolean;
  setCameraView: Dispatch<SetStateAction<boolean>>;
  onRemoveImage: () => void;
  loading: boolean;
}

const Thumbnail: React.FC<Props> = ({
  thumbnail,
  onPickImage,
  hasPermission,
  cameraView,
  setCameraView,
  onRemoveImage,
  loading,
}) => (
  <View style={styles.container}>
    {thumbnail === '' ? (
      loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          <Button
            title="썸네일 등록"
            onPress={onPickImage}
            containerStyle={{ marginRight: 15 }}
          />
          <Button
            title="썸네일 촬영"
            style={{ backgroundColor: '#44b681' }}
            buttonStyle={{ backgroundColor: '#44b681' }}
            onPress={() => setCameraView(!cameraView)}
          />
        </>
      )
    ) : (
      <AntDesign
        name="delete"
        size={24}
        color={'red'}
        onPress={onRemoveImage}
      />
    )}
    {loading === true ? (
      <ActivityIndicator />
    ) : thumbnail ? (
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
    ) : null}
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    marginTop: 15,
    width: 300,
    height: 225,
  },
});

export default Thumbnail;
