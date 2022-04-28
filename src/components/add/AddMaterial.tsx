import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

interface Props {
  inputs: MaterialType;
  setInputs: Dispatch<SetStateAction<MaterialType>>;
  onAddMaterial: () => void;
}

const UnitDropdown = [
  'kg',
  'g',
  'ℓ',
  '㎖',
  'cup',
  'Tbsp',
  'Tsp',
  'cc',
  'oz',
  'ea',
];
const DivideDropdown = ['주재료', '부재료', '소스'];

const AddMaterial: React.FC<Props> = ({ inputs, setInputs, onAddMaterial }) => (
  <View style={styles.container}>
    <Text h3 h3Style={styles.title}>
      재료 입력
    </Text>

    <View style={styles.inputGroup}>
      <Input
        placeholder="재료명"
        autoCapitalize="none"
        autoCompleteType="off"
        value={inputs.name}
        onChangeText={(text: string) => setInputs({ ...inputs, name: text })}
      />

      <Input
        placeholder="사용량"
        autoCapitalize="none"
        autoCompleteType="off"
        value={inputs.usage}
        onChangeText={(text: string) => setInputs({ ...inputs, usage: text })}
        keyboardType="number-pad"
      />

      <View style={styles.dropdown}>
        <Text style={[styles.label, { marginRight: 55 }]}>단위</Text>
        <Picker
          style={styles.picker}
          selectedValue={inputs.unit}
          onValueChange={(unit: UnitType) => setInputs({ ...inputs, unit })}
        >
          {UnitDropdown.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <View style={styles.dropdown}>
        <Text style={styles.label}>재료구분</Text>
        <Picker
          style={styles.picker}
          selectedValue={inputs.divide}
          onValueChange={(divide: DivideType) =>
            setInputs({ ...inputs, divide })
          }
        >
          {DivideDropdown.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <Input
        placeholder="단가"
        autoCapitalize="none"
        autoCompleteType="off"
        value={inputs.price}
        onChangeText={(text: string) => setInputs({ ...inputs, price: text })}
        keyboardType="number-pad"
      />

      <Button
        title="재료 추가"
        buttonStyle={styles.button}
        onPress={onAddMaterial}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  title: {
    color: '#00ab82',
  },
  inputGroup: {
    marginTop: 10,
    flex: 1,
    width: '85%',
  },
  dropdown: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginRight: 25,
    textAlignVertical: 'center',
  },
  picker: {
    width: '75%',
  },
  button: {
    marginTop: 25,
  },
});

export default AddMaterial;
