import React from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import {Container, Title} from '../../common/components';

export default function News() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'height'} enabled>
        <Container>
          <View
            style={{
              backgroundColor: '#FFECC7',
              paddingVertical: '8%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title>News</Title>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title style={{color: 'gray'}}>COMING SOON ...</Title>
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
