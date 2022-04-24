import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FAB } from 'react-native-paper';
import RecipesList from './RecipesList';

LogBox.ignoreLogs(['Setting a timer', 'AsyncStorage']);

interface Props {
  recipes: RecipeType[];
  loading: boolean;
  fetchNextPage: () => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  onMenu: (id: string) => void;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  onInit: () => void;
}

const Home: React.FC<Props> = ({
  recipes,
  loading,
  fetchNextPage,
  title,
  setTitle,
  onSearch,
  onMenu,
  toggle,
  setToggle,
  onInit,
}) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.layout}>
      <Text h3 h3Style={styles.title}>
        모든 레시피
      </Text>

      {recipes && recipes.length > 0 && (
        <RecipesList
          recipes={recipes}
          loading={loading}
          onMenu={onMenu}
          onNextListRecipes={fetchNextPage}
        />
      )}
    </SafeAreaView>

    <FAB.Group
      open={toggle}
      visible={true}
      icon={toggle ? 'close' : 'plus'}
      actions={[
        {
          icon: 'cart-plus',
          label: '레시피 추가하기',
          onPress: () => onInit(),
        },
      ]}
      onStateChange={() => setToggle(!toggle)}
    />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layout: {
    width: '100%',
    marginVertical: 50,
  },
  title: {
    textAlign: 'center',
    color: '#00ab82',
    marginBottom: 20,
  },
});

export default Home;
