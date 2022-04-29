import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Button, Input, Text } from 'react-native-elements';

interface Props {
  recipe: RecipeType;
  allCost: number;
  allPrice: string;
  setAllPrice: Dispatch<SetStateAction<string>>;
  onAddCostRecipe: () => void;
  updatePrice: boolean;
  setUpdatePrice: Dispatch<SetStateAction<boolean>>;
}

const Calcul: React.FC<Props> = ({
  recipe,
  allCost,
  allPrice,
  setAllPrice,
  onAddCostRecipe,
  updatePrice,
  setUpdatePrice,
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>코스트</Text>
      {allPrice !== '' && !recipe.all_price && (
        <Button
          title="코스트 저장"
          onPress={() => {
            setUpdatePrice(false);
            onAddCostRecipe();
          }}
        />
      )}
      {updatePrice && (
        <Button
          title="코스트 저장"
          onPress={() => {
            setUpdatePrice(false);
            onAddCostRecipe();
          }}
        />
      )}
    </View>

    <View style={styles.contents}>
      <Grid style={styles.table}>
        <Row>
          <Col size={30} style={styles.cols}>
            <Text>총 원가</Text>
          </Col>
          <Col size={30} style={styles.cols}>
            <Text>제공 가격</Text>
          </Col>
          <Col size={30} style={styles.cols}>
            <Text>코스트</Text>
          </Col>
        </Row>

        <Row>
          <Col size={30} style={styles.cols}>
            <Text>
              {allCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          </Col>
          <Col size={30} style={styles.cols}>
            {recipe.all_price ? (
              updatePrice ? (
                <Input
                  autoCapitalize="none"
                  autoCompleteType="off"
                  placeholder="입력"
                  containerStyle={{ height: 25 }}
                  inputContainerStyle={{ height: 25 }}
                  inputStyle={{ fontSize: 14, height: 10, textAlign: 'center' }}
                  value={allPrice}
                  onChangeText={(text) => setAllPrice(text)}
                  keyboardType="number-pad"
                />
              ) : (
                <Text onPress={() => setUpdatePrice(true)}>
                  {recipe.all_price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </Text>
              )
            ) : (
              <Input
                autoCapitalize="none"
                autoCompleteType="off"
                placeholder="입력"
                containerStyle={{ height: 25 }}
                inputContainerStyle={{ height: 25 }}
                inputStyle={{ fontSize: 14, height: 10, textAlign: 'center' }}
                value={allPrice}
                onChangeText={(text) => setAllPrice(text)}
                keyboardType="number-pad"
              />
            )}
          </Col>
          <Col size={30} style={styles.cols}>
            <Text>
              {((allCost / parseInt(allPrice)) * 100).toString() === 'NaN'
                ? '%'
                : `${((allCost / parseInt(allPrice)) * 100).toFixed(1)}%`}
            </Text>
          </Col>
        </Row>
      </Grid>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    minHeight: 120,
    maxHeight: 120,
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contents: {
    height: 65,
  },
  table: {
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderTopColor: '#3ea5b8',
    borderBottomColor: '#3ea5b8',
    paddingVertical: 10,
  },
  cols: {
    alignItems: 'center',
  },
});

export default Calcul;
