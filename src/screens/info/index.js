import React, {useState} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Container,
  Title,
  Card,
  TextRN,
  ButtonIcon,
  ButtonRN,
} from '../../common/components';
import {UserContext} from '../../common/context/userContext';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk-next';

import Icon from 'react-native-vector-icons/AntDesign';
import {Item} from './item';

export default function Info({navigation}) {
  const uContext = React.useContext(UserContext);
  const [status, set_status] = useState(false);

  const _logOut = () => {
    LoginManager.logOut();
    set_status(true);
    setTimeout(() => {
      uContext.logout();
      navigation.replace('Login');
    }, 2000);
  };

  return (
    <Container>
      {status && (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,.9)',
            zIndex: 999,
          }}>
          <Image
            source={require('../../assets/image/ball-loading.gif')}
            resizeMethod={'resize'}
            resizeMode={'contain'}
          />
          <TextRN>Loading...</TextRN>
        </View>
      )}

      <ScrollView>
        <StatusBar
          animated={false}
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <View
          style={{
            backgroundColor: '#FFECC7',
            paddingVertical: '8%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Title>Profile</Title>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View style={{borderRadius: 180, elevation: 5}}>
            <Image
              source={{uri: uContext.data.avatar}}
              style={{
                width: 200,
                height: 200,
                borderRadius: 180,
                borderWidth: 1,
              }}
              resizeMethod={'resize'}
              resizeMode={'contain'}
            />
          </View>
          <Card>
            <Title>{uContext.data.name}</Title>
            <TextRN style={{fontStyle: 'italic'}}>
              {uContext.data.email}{' '}
            </TextRN>
          </Card>
          <View
            style={{
              width: '90%',
              padding: 20,
              marginVertical: 20,
              elevation: 2,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <Item title={'Your phone'} value={'Chưa cập nhật'} />
            <Item title={'DOB'} value={'Chưa cập nhật'} />
          </View>
          <ButtonRN
            onPress={_logOut}
            left={<Icon name="logout" size={20} color={'#fff'} />}
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              backgroundColor: 'red',
            }}>
            Đăng xuất
          </ButtonRN>
        </View>
      </ScrollView>
    </Container>
  );
}
