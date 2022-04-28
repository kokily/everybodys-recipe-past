import React from 'react';
import { StyleSheet } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { Text } from 'react-native-elements';

interface Props {
  data: MaterialType[];
  onRemove: (materialId: string) => void;
  divide: string;
}

const MaterialsList: React.FC<Props> = ({ data, onRemove, divide }) => (
  <Grid style={styles.container}>
    <Row style={styles.row}>
      <Col size={100}>
        <Text style={styles.header}>{data[0]?.divide}</Text>
      </Col>
    </Row>

    {divide === '주재료' && (
      <Row style={styles.row}>
        <Col size={50}>
          <Text style={styles.text}>재료</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.text}>사용량</Text>
        </Col>
        <Col size={20}>
          <Text style={styles.text}>단위</Text>
        </Col>
        <Col size={10}>
          <Text style={styles.text}>삭제</Text>
        </Col>
      </Row>
    )}

    {data.length > 0 ? (
      data.map((material) => (
        <Row key={material.id} style={styles.array}>
          <Col size={50}>
            <Text style={styles.text}>{material.name}</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.text}>{material.usage}</Text>
          </Col>
          <Col size={20}>
            <Text style={styles.text}>{material.unit}</Text>
          </Col>
          <Col size={10} onPress={() => onRemove(material.id)}>
            <Text style={[styles.text, { color: '#fb0000' }]}>삭제</Text>
          </Col>
        </Row>
      ))
    ) : (
      <Row style={styles.array}>
        <Col size={100}>
          <Text>저장된 {divide}가 없습니다.</Text>
        </Col>
      </Row>
    )}
  </Grid>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'column',
  },
  row: {
    borderBottomWidth: 0.2,
    paddingVertical: 6,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  array: {
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: '#aeaeae',
    paddingVertical: 6,
  },
  text: {
    textAlign: 'center',
  },
});

export default MaterialsList;
