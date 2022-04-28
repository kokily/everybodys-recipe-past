import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Banner, FAB } from 'react-native-paper';
import Thumbnail from './Thumbnail';
import MenuButtons from './MenuButtons';

interface Props {
  recipe: RecipeType | undefined;
  banner: boolean;
  setBanner: Dispatch<SetStateAction<boolean>>;
  onMaterial: () => void;
  onCost: () => void;
  onAddMaterial: () => void;
  onRemoveRecipe: () => void;
  onPickImage: () => void;
}

const Menu: React.FC<Props> = ({
  recipe,
  banner,
  setBanner,
  onMaterial,
  onCost,
  onAddMaterial,
  onRemoveRecipe,
  onPickImage,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      {recipe && (
        <>
          <Text h3 h3Style={styles.title}>
            {recipe.title}
          </Text>

          <Thumbnail thumbnail={recipe.thumbnail} onPickImage={onPickImage} />

          <Banner
            visible={banner}
            actions={[
              {
                label: '확인',
                onPress: () => setBanner(false),
              },
            ]}
            style={styles.banner}
          >
            이미지 클릭 시 변경할 수 있습니다
          </Banner>

          <MenuButtons onMaterial={onMaterial} onCost={onCost} />

          <FAB.Group
            open={toggle}
            visible={true}
            icon={toggle ? 'close' : 'plus'}
            actions={[
              {
                icon: 'comment-remove',
                label: '이 레시피 삭제하기',
                onPress: () => onRemoveRecipe(),
              },
              {
                icon: 'comment-plus',
                label: '식재료 추가하기',
                onPress: () => onAddMaterial(),
              },
            ]}
            onStateChange={() => setToggle(!toggle)}
            style={{ zIndex: 20 }}
          />
        </>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    color: '#00ab82',
    marginBottom: 10,
  },
  banner: {
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
  },
});

export default Menu;
