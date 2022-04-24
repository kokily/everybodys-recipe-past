import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { listRecipesAPI } from '../api/recipes';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function useHome({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [toggle, setToggle] = useState(false);
  const { data, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery(
    'menus',
    ({ pageParam }) => listRecipesAPI({ title, cursor: pageParam }),
    {
      getNextPageParam: (data) =>
        data.length === 20 ? data[data.length - 1].id : undefined,
      enabled: true,
    }
  );
  const recipes = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as RecipeType[]).concat(...data.pages);
  }, [data]);

  const onSearch = useCallback(() => {
    refetch();
  }, [title, refetch]);

  const onMenu = (id: string) => {
    navigation.navigate('MenuScreen', { id });
  };

  return {
    recipes,
    loading: isFetchingNextPage,
    fetchNextPage,
    title,
    setTitle,
    onSearch,
    onMenu,
    toggle,
    setToggle,
  };
}

export default useHome;
