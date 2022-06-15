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
  const [loading, setLoading] = useState(false);
  const { mutate: initRecipe } = useMutation(initRecipeAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('menus');
    },
  });

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const url = await uploadImage(result.uri);

      setInits({
        ...inits,
        thumbnail: url,
      });
    } else {
      console.log('취소됨');
      return;
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
        const url = await uploadImage(data.uri);

        setInits({
          ...inits,
          thumbnail: url,
        });
        setCameraView(false);
      }
    } catch (err: any) {
      console.log(err);
      return;
    }
  };

  const checkPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const imagePermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    setHasPermission(
      cameraPermission.status === 'granted' &&
        imagePermission.status === 'granted'
    );

    if (
      cameraPermission.status !== 'granted' &&
      imagePermission.status !== 'granted'
    ) {
      Alert.alert('미디어 액세스 권한이 필요합니다!');
      return;
    }
  };

  useEffect(() => {
    checkPermission();
  }, []);

  console.log(thumbnail);

  return {
    inits,
    setInits,
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
    loading,
  };
}

export default useInit;
