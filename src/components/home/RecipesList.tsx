import React, { useMemo } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import RecipeItem from './RecipeItem';

interface Props {
  recipes: RecipeType[];
  loading: boolean;
  onMenu: (id: string) => void;
  onNextListRecipes: () => void;
}

const RecipesList: React.FC<Props> = ({
  recipes,
  loading,
  onMenu,
  onNextListRecipes,
}) => {
  const renderItem = ({ item }: { item: RecipeType }) => (
    <RecipeItem recipe={item} onMenu={onMenu} />
  );

  const memoziedItem = useMemo(() => renderItem, [recipes]);

  return (
    <FlatList
      data={recipes}
      bounces={false}
      renderItem={memoziedItem}
      keyExtractor={(item, i) => item.id + i}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
      disableVirtualization={false}
      onEndReached={onNextListRecipes}
      style={{ marginTop: 24 }}
    />
  );
};

export default RecipesList;
