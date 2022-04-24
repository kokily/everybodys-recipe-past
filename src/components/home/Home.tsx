import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar, FAB, Button } from 'react-native-paper';
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

      <View style={styles.searchBox}>
        <Searchbar
          placeholder="레시피 검색"
          onChangeText={setTitle}
          value={title}
          autoComplete="none"
          style={styles.search}
        />
        <Button mode="contained" style={styles.button} onPress={onSearch}>
          찾 기
        </Button>
      </View>

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
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#00ab82',
    marginBottom: 20,
  },
  searchBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search: {
    width: '80%',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#00ab82',
    fontSize: 18,
  },
});

export default Home;
