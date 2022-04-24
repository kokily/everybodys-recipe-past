import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {}

const Thumbnail: React.FC<Props> = () => <View style={styles.container}></View>;

// Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Thumbnail;
