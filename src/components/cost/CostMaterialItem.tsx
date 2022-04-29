import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  material: MaterialType;
}

const CostMaterialItem: React.FC<Props> = ({ material }) => (
  <Row style={styles.container}>
    <Col size={20}>
      <Text style={styles.text}>{material.name}</Text>
    </Col>
    <Col size={10}>
      <Text style={styles.text}>{material.unit}</Text>
    </Col>
    <Col size={30}>
      <Text style={styles.text}>
        {material.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </Text>
    </Col>
    <Col size={10}>
      <Text style={styles.text}>
        {material.usage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </Col>
    <Col size={30}>
      <Text style={styles.text}>
        {material.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </Text>
    </Col>
  </Row>
);

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8c8c8c',
    paddingHorizontal: 5,
  },
  text: {
    textAlign: 'center',
  },
});

export default CostMaterialItem;
