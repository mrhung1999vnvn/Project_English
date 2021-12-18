import React from 'react';
import {Card, Title} from '../../../../common/components';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './index.styles';
export function Item(props) {
  return (
    <Card style={styles.container}>
      <Title style={{color: '#fff'}}>{props.word}</Title>
      <Icon name="right" size={20} />
    </Card>
  );
}
