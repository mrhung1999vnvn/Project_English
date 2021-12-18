import React from 'react';
import {Button, Dimensions, Text, View} from 'react-native';
import {
  ButtonFlat,
  ButtonRN,
  Card,
  Container,
  Title,
} from '../../../common/components';

export function Item(props) {
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          backgroundColor: 'rgba(75,156,248,1)',
          elevation: 5,
          borderRadius: 12,
          marginVertical: 5,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Title style={{marginBottom: 20, color: '#fff'}}>{props.word} </Title>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,.2)',
            width: '100%',
          }}
        />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <ButtonFlat
            onPress={props.onNext}
            style={{
              flex: 1,
              justifyContent: 'center',
              marginHorizontal: 0,
              borderRadius: 0,
              backgroundColor: 'rgba(75,156,248,1)',
              elevation: 0,
            }}>
            I Knowed
          </ButtonFlat>
          <ButtonFlat
            onPress={props.onSave}
            styleText={{color: '#FEBF80'}}
            style={{
              flex: 1,
              justifyContent: 'center',
              marginHorizontal: 0,
              elevation: 0,
              borderRadius: 0,
              borderLeftWidth: 1,
              borderLeftColor: 'rgba(255,255,255,.2)',
              backgroundColor: 'rgba(75,156,248,1)',
            }}>
            Study
          </ButtonFlat>
        </View>
      </View>
    </View>
  );
}
