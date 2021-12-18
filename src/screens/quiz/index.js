import {useFocusEffect} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, Image} from 'react-native';

import {Container, TextRN, Title, ButtonRN} from '../../common/components';
import {AppContext} from '../../common/context/appContext';
import {DictionaryContext} from '../../common/context/dictionaryContext';

export default function Quiz({navigation}) {
  const dContext = React.useContext(AppContext);

  const _getData = () => {
    console.log(data[data.length - 1]);
  };

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FFECC7',
          paddingVertical: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Title>Quiz</Title>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/image/quiz.png')}
          resizeMode={'contain'}
          resizeMethod={'resize'}
        />
        <View
          style={{
            marginHorizontal: 30,
            marginVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextRN
            style={{
              fontSize: 20,
              color: 'gray',
              marginBottom: 30,
              textAlign: 'center',
            }}>
            You will get 30 seconds for 10 question from your pocket you have
            saved
          </TextRN>
        </View>
        <ButtonRN
          style={{justifyContent: 'center'}}
          onPress={() =>
            navigation.navigate('Exercise', {
              data: dContext.dictionary.getDictionaryContext(),
            })
          }>
          Press to start !
        </ButtonRN>
        {/* <ButtonRN style={{ justifyContent: 'center' }} onPress={_getData}>Press to start !</ButtonRN> */}
      </View>
    </Container>
  );
}
