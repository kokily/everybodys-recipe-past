import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import AppLayout from '../components/common/AppLayout';
import Home from '../components/home/Home';
import useHome from '../hooks/useHome';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
}

function HomeScreen({ navigation }: Props) {
  const {
    recipes,
    loading,
    fetchNextPage,
    title,
    setTitle,
    onSearch,
    onMenu,
    toggle,
    setToggle,
  } = useHome({ navigation });

  return (
    <AppLayout navigation={navigation}>
      <Home
        recipes={recipes}
        loading={loading}
        fetchNextPage={fetchNextPage}
        title={title}
        setTitle={setTitle}
        onSearch={onSearch}
        onMenu={onMenu}
        toggle={toggle}
        setToggle={setToggle}
        onInit={() => navigation.navigate('InitScreen')}
      />
    </AppLayout>
  );
}

export default HomeScreen;
