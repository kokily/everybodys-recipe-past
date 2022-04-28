import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AddMaterial from '../components/add/AddMaterial';
import AppLayout from '../components/common/AppLayout';
import useAddMaterial from '../hooks/useAddMaterial';
import useBack from '../hooks/useBack';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function AddMaterialScreen({ navigation }: Props) {
  const { onBack } = useBack({ navigation });
  const { inputs, setInputs, onAddMaterial } = useAddMaterial({ navigation });

  return (
    <AppLayout navigation={navigation} onBack={onBack}>
      <AddMaterial
        inputs={inputs}
        setInputs={setInputs}
        onAddMaterial={onAddMaterial}
      />
    </AppLayout>
  );
}

export default AddMaterialScreen;
