import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addRecipeAPI, readRecipeAPI } from '../api/recipes';
import { removeMaterialAPI } from '../api/materials';

function useMaterial() {
  const route = useRoute();
  const { id }: any = route.params;
  const queryClient = useQueryClient();
  const [main, setMain] = useState<MaterialType[]>([]);
  const [sub, setSub] = useState<MaterialType[]>([]);
  const [source, setSource] = useState<MaterialType[]>([]);
  const [content, setContent] = useState('');
  const [update, setUpdate] = useState(false);
  const { mutate: addRecipe } = useMutation(addRecipeAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('recipe');
    },
  });
  const { mutate: removeMaterial } = useMutation(removeMaterialAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries('recipe');
    },
  });
  const { data: recipe } = useQuery('recipe', () => readRecipeAPI(id), {
    onSuccess: (data) => {
      setMain(
        data.materials.filter((material) => material.divide === '주재료')
      );
      setSub(data.materials.filter((material) => material.divide === '부재료'));
      setSource(
        data.materials.filter((material) => material.divide === '소스')
      );
    },
    enabled: true,
  });

  const onAddRecipe = useCallback(() => {
    if (content === '') {
      Alert.alert('레시피 내용을 입력해주세요');
      return;
    }

    addRecipe({ id, content });
  }, [content, addRecipe]);

  const onRemove = useCallback(
    (materialId: string) => {
      Alert.alert('경고!', '해당 재료를 삭제합니다', [
        {
          text: '취소',
          onPress: () => console.log('취소'),
        },
        {
          text: '삭제!',
          onPress: () => {
            removeMaterial(materialId);
          },
        },
      ]);
    },
    [removeMaterial]
  );

  return {
    recipe,
    main,
    sub,
    source,
    content,
    setContent,
    onAddRecipe,
    onRemove,
    update,
    setUpdate,
  };
}

export default useMaterial;
