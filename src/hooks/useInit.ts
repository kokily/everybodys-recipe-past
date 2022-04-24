import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useUserState } from '../context/UserContext';
import { initRecipeAPI } from '../api/recipes';
import uploadImage from '../libs/upload';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useInit({ navigation }: Props) {
  const queryClient = useQueryClient();
  const [user] = useUserState();
  const [inits, setInits] = useState({
    title: '',
    serving: '',
    thumbnail: '',
  });
  const { title, serving, thumbnail } = inits;
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [cameraView, setCameraView] = useState(false);
  const { mutate: initRecipe } = useMutation(initRecipeAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });

  const onBack = () => {
    navigation.goBack();
  };

  const onInitRecipe = useCallback(() => {
    if ([title, serving, thumbnail].includes('')) {
      Alert.alert('빈 칸 없이 입력하세요');
      return;
    }

    if (parseInt(serving) <= 0) {
      Alert.alert('인분 수를 정확히 입력하세요.');
      return;
    }

    if (!user) {
      navigation.navigate('LoginScreen');
    } else {
      initRecipe({ title, serving: parseInt(serving), thumbnail });
      navigation.navigate('HomeScreen');
    }
  }, [initRecipe, inits]);

  const onPickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        const key = await uploadImage(result.uri);

        setInits({
          ...inits,
          thumbnail: `https://image.dnkdream.com/${key}`,
        });
      } catch (err: any) {
        console.log(err);
        return;
      }
    }
  };

  const onRemoveImage = useCallback(() => {
    Alert.alert('삭제', '썸네일을 삭제합니다.', [
      {
        text: '취소',
        onPress: () => console.log('취소'),
      },
      {
        text: '삭제',
        onPress: () => setInits({ ...inits, thumbnail: '' }),
      },
    ]);
  }, [inits]);

  const onTakePicture = async () => {
    try {
      if (camera) {
        const data = await camera.takePictureAsync();
        const key = await uploadImage(data.uri);

        setInits({
          ...inits,
          thumbnail: `https://image.dnkdream.com/${key}`,
        });
        setCameraView(false);
      }
    } catch (err: any) {
      console.log(err);
      return;
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return {
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
  };
}

export default useInit;
