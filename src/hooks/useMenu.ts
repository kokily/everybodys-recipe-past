import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import * as ImagePicker from 'expo-image-picker';
import {
  changeThumbnailAPI,
  readRecipeAPI,
  removeRecipeAPI,
} from '../api/recipes';
import uploadImage from '../libs/upload';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useMenu({ navigation }: Props) {
  const queryClient = useQueryClient();
  const route = useRoute();
  const { id }: any = route.params;
  const [banner, setBanner] = useState(true);
  const { data } = useQuery('menu', () => readRecipeAPI(id), {
    enabled: true,
  });
  const { mutate: removeRecipe } = useMutation(removeRecipeAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
      queryClient.invalidateQueries('menu');
    },
  });
  const { mutate: changeThumbnail } = useMutation(changeThumbnailAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
      queryClient.invalidateQueries('menu');
    },
  });

  const onMaterial = () => {
    navigation.navigate('MaterialScreen', { id });
  };

  const onCost = () => {
    navigation.navigate('CostScreen', { id });
  };

  const onAddMaterial = () => {
    navigation.navigate('AddMaterialScreen', { id });
  };

  const onRemoveRecipe = useCallback(() => {
    Alert.alert('경고!', '문서가 삭제됩니다!', [
      {
        text: '취소',
        onPress: () => {
          return;
        },
      },
      {
        text: '삭제!',
        onPress: () => {
          removeRecipe(id);
          navigation.navigate('HomeScreen');
        },
      },
    ]);
  }, [removeRecipe]);

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const url = await uploadImage(result.uri);
      await changeThumbnail({ id, thumbnail: url });
    } else {
      console.log('취소됨');
      return;
    }
  };

  return {
    recipe: data,
    banner,
    setBanner,
    onMaterial,
    onCost,
    onAddMaterial,
    onRemoveRecipe,
    onPickImage,
  };
}

export default useMenu;
