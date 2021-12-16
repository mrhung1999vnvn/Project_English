import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, StatusBar, View, Animated} from 'react-native';

import {Container, Title} from '../../common/components';
import {getUser} from '../../common/db/user';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {UserContext} from '../../common/context/userContext';

export default function Splash() {
  const uNavigation = useNavigation();
  const uContext = React.useContext(UserContext);
  
  return (
    <Container>
      <StatusBar
        animated={false}
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Image
          source={require('../../assets/logo/ic_launcher.png')}
          resizeMode="contain"
          resizeMethod={'resize'}
        />
      </View>
    </Container>
  );
}
