import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';
import CostMaterialItem from './CostMaterialItem';

interface Props {
  materials: MaterialType[];
}

const CostMaterialsList: React.FC<Props> = ({ materials }) => (
  <Grid style={styles.container}>
    <Row>
      <Col size={20}>
        <Text style={styles.text}>재료</Text>
      </Col>
      <Col size={10}>
        <Text style={styles.text}>단위</Text>
      </Col>
      <Col size={30}>
        <Text style={styles.text}>단가(원)</Text>
      </Col>
      <Col size={10}>
        <Text style={styles.text}>사용량</Text>
      </Col>
      <Col size={30}>
        <Text style={styles.text}>원가(원)</Text>
      </Col>
    </Row>

    {materials && materials.length > 0 ? (
      materials.map((material) => (
        <CostMaterialItem key={material.id} material={material} />
      ))
    ) : (
      <Row>
        <Col size={100}>저장된 재료가 없습니다</Col>
      </Row>
    )}
  </Grid>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 0.2,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default CostMaterialsList;
