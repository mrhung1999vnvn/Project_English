import React, {useContext, useEffect, useState} from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

import Icon from 'react-native-vector-icons/AntDesign';
import {TextRN, Container, Title, ButtonRN} from '../../common/components';

import {UserContext} from '../../common/context/userContext';
import {getUser} from '../../common/db/user';
import style from './index.style';

export default function Login({navigation}) {
  const {height} = Dimensions.get('screen');
  const uContext = useContext(UserContext);

  const [state, set_State] = useState({
    status: 1,
    loading: false,
    fadeAnimation: new Animated.Value(0),
    fadeAnimation2: new Animated.Value(height),
  });

  const infoRequest = new GraphRequest(
    '/me?fields=id,email,name,address,birthday,gender,photos,picture.type(large)',
    null,
    (error, result) => {
      if (!error) {
        uContext.setData({
          accountId: result.id,
          name: result.name,
          avatar: result.picture.data.url,
          phone: '',
          email: result.email,
          gender: '',
          birthday: '',
        });
        return {status: true};
      } else {
        console.log(error);
        return {status: false, message: error};
      }
    },
  );

  const transformOut = () => {
    Animated.parallel([
      Animated.timing(state.fadeAnimation, {
        toValue: height,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(state.fadeAnimation2, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const transformIn = () => {
    Animated.parallel([
      Animated.timing(state.fadeAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(state.fadeAnimation2, {
        toValue: height,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const _onPress = () => {
    if (state.status) {
      transformOut();
      set_State((oldState) => ({...oldState, status: 0}));
    } else {
      transformIn();
      set_State((oldState) => ({...oldState, status: 1}));
    }
  };

  const _loginWithFacebook = async () => {
    set_State((oldState) => ({...oldState, loading: true}));
    LoginManager.logInWithPermissions(['public_profile'])
      .then(() => {
        new GraphRequestManager().addRequest(infoRequest).start();
        setTimeout(() => {
          navigation.replace('Tab');
        }, 200);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const account = getUser();
    if (account) {
      const newObject = {
        accountId: account.ID,
        name: account.name,
        avatar: account.avatar,
        email: account.email,
      };
      uContext.setData(newObject);
      navigation.replace('Tab');
    }

    return () => {};
  }, [navigation, uContext]);

  return (
    <TouchableWithoutFeedback>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'} enabled>
        <StatusBar
          animated={false}
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        {state.loading && (
          <View style={style.loadingContainer}>
            <Image
              source={require('../../assets/image/ball-loading.gif')}
              resizeMethod={'resize'}
              resizeMode={'contain'}
            />
            <TextRN>Loading...</TextRN>
          </View>
        )}
        <Container>
          <Image
            source={require('../../assets/logo/ic_launcher.png')}
            resizeMethod={'resize'}
            resizeMode={'contain'}
            style={{flex: 1, width: '50%', alignSelf: 'center'}}
          />
          <Animated.View
            style={[
              style.container,
              {transform: [{translateY: state.fadeAnimation}]},
            ]}>
            <Title style={{marginTop: 30}}>Welcome to Sunen!</Title>
            <TextRN style={style.text}>
              (We will help you gain knowledge that will change your life.
              Participate )
            </TextRN>
            <ButtonRN
              onPress={_onPress}
              style={style.button}
              right={<Icon name="arrowright" size={30} color="#fff" />}>
              Let's go
            </ButtonRN>
          </Animated.View>
          <Animated.View
            style={[
              style.container2,
              {transform: [{translateY: state.fadeAnimation2}]},
            ]}>
            <Title style={{marginTop: 30, fontSize: 40}}>Choose one !</Title>
            <TextRN style={style.text}>
              (We will help you gain knowledge that will change your life.
              Participate )
            </TextRN>
            <ButtonRN
              left={<Icon name="facebook-square" size={30} color="#fff" />}
              onPress={_loginWithFacebook}
              style={[style.button, style.buttonFacebook]}>
              Login with Facebook
            </ButtonRN>
          </Animated.View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
