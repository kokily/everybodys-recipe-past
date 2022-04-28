import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
  onMaterial: () => void;
  onCost: () => void;
}

const MenuButtons: React.FC<Props> = ({ onMaterial, onCost }) => (
  <View style={styles.container}>
    <Button
      mode="contained"
      style={[styles.button, styles.material]}
      labelStyle={styles.buttonText}
      onPress={onMaterial}
    >
      식재료, 레시피
    </Button>
    <Button
      mode="contained"
      style={[styles.button, styles.cost]}
      labelStyle={styles.buttonText}
      onPress={onCost}
    >
      코스트
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 40,
  },
  button: {
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  material: {
    backgroundColor: '#00ab82',
  },
  cost: {
    backgroundColor: '#4aa7cf',
  },
});

export default MenuButtons;
