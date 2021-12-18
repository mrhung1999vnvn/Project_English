import React from 'react';
import {View} from 'react-native';
import {Card, Title, TextRN, ButtonIcon} from '../../common/components';
import Icon from 'react-native-vector-icons/AntDesign';

export function Item(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Title style={{fontSize: 17}}>{props.title}: </Title>
      <TextRN style={{fontSize: 17}}>{props.value} </TextRN>
      <ButtonIcon>
        <Icon name={'edit'} size={25} color={'#FF8811'} />
      </ButtonIcon>
    </View>
  );
}
