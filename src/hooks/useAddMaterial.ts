import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useMutation, useQueryClient } from 'react-query';
import { addMaterialAPI } from '../api/materials';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useAddMaterial({ navigation }: Props) {
  const queryClient = useQueryClient();
  const route = useRoute();
  const { id }: any = route.params;
  const [inputs, setInputs] = useState<InputMaterialType>({
    id: '',
    name: '',
    usage: '',
    unit: 'g',
    divide: '주재료',
    price: '',
    cost: '',
  });
  const { name, usage, unit, divide, price, cost } = inputs;
  const { mutate: addMaterial } = useMutation(addMaterialAPI, {
    onSuccess: () => queryClient.invalidateQueries('recipe'),
  });

  const onAddMaterial = useCallback(() => {
    if ([name, unit, divide].includes('')) {
      Alert.alert('비어있는 칸 없이 입력하세요.');
      return;
    }

    if (parseFloat(usage) < 0 || parseInt(price) < 1 || parseInt(cost) < 1) {
      Alert.alert('올바른 수치를 입력하세요.');
      return;
    }

    addMaterial({
      recipe_id: id,
      name,
      usage: parseFloat(usage),
      unit,
      divide,
      price: parseInt(price),
      cost: parseFloat(usage) * parseInt(price),
    });
    navigation.goBack();
  }, [name, usage, unit, divide, price, cost, addMaterial]);

  const checkPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert(
        "Please grant camera roll permissions inside your system's settings"
      );
    } else {
      console.log('Media Permissions are granted');
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  return {
    inputs,
    setInputs,
    onAddMaterial,
  };
}

export default useAddMaterial;
