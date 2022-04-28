import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  thumbnail: string;
  onPickImage: () => void;
}

const Thumbnail: React.FC<Props> = ({ thumbnail, onPickImage }) => {
  return (
    <View style={styles.container} onTouchStart={onPickImage}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  thumbnail: {
    width: 300,
    height: 220,
  },
});

export default Thumbnail;
