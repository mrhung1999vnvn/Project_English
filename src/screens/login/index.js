import React, { useContext, useEffect, useState } from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Image,
    StyleSheet,
    Animated,
    Dimensions, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextRN, Container, Title, ButtonRN } from "../../common/components";
import { LoginManager, GraphRequest, GraphRequestManager, AccessToken } from 'react-native-fbsdk';

import { UserContext } from "../../common/context/userContext";





export default function Login({ navigation }) {
    const { height, width } = Dimensions.get('screen');
    const uContext = useContext(UserContext);

    const [state, set_State] = useState({
        status: 1,
        fadeAnimation: new Animated.Value(0),
        fadeAnimation2: new Animated.Value(height),
    });

    const infoRequest = new GraphRequest(
        '/me?fields=id,email,name,address,birthday,gender,photos,picture.type(large)',
        null,
        (error,result)=>{
            if (!error) {
                console.log(result.picture.data.url)
                uContext.setData({
                    accountId:result.id,
                    name:result.name,
                    avatar:result.picture.data.url,
                    phone:'',
                    email:result.email,
                    gender:'',
                    birthday:'',
                })
            } 
        },
    );

    const transformOut = () => {
        Animated.parallel([
            Animated.timing(state.fadeAnimation, {
                toValue: height,
                duration: 700,
                useNativeDriver: true
            }),
            Animated.timing(state.fadeAnimation2, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }),
        ]).start()
    };

    const transformIn = () => {
        Animated.parallel([
            Animated.timing(state.fadeAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(state.fadeAnimation2, {
                toValue: height,
                duration: 700,
                useNativeDriver: true
            })
        ]).start()
    };

    const _onPress = () => {
        if (state.status) {
            transformOut();
            set_State((oldState) => ({ ...oldState, status: 0 }))
        } else {
            transformIn();
            set_State((oldState) => ({ ...oldState, status: 1 }))
        }
    }


    const _loginWithFacebook = async () => {
        if (AccessToken.getCurrentAccessToken()) {
            new GraphRequestManager().addRequest(infoRequest).start();
            setTimeout(()=>{
                navigation.navigate("Tab")
            },2000)
        }
        else {
            LoginManager.logInWithPermissions(["public_profile"])
                .then(() => {
                    new GraphRequestManager().addRequest(infoRequest).start();
                    setTimeout(()=>{
                        navigation.navigate("Tab")
                    },2000)
                })
                .catch(err => console.log(err))
        }
    }

    const _loginWithApple = async () => {
        Alert.alert('Thông báo', "Chức năng chưa phát triển !");
    }



    return (
        <TouchableWithoutFeedback>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'} enabled>
                <StatusBar animated={false} translucent backgroundColor="transparent" barStyle={'dark-content'} />
                <Container>
                    <Image source={require('../../assets/logo/ic_launcher.png')} resizeMethod={'resize'} resizeMode={'contain'} style={{ flex: 1, width: '50%', alignSelf: 'center' }} />
                    <Animated.View style={[style.container, { transform: [{ translateY: state.fadeAnimation }] }]}>
                        <Title style={{ marginTop: 30 }}>Welcome to Sunen!</Title>
                        <TextRN style={style.text}>(We will help you gain knowledge that will change your life. Participate )</TextRN>
                        <ButtonRN onPress={_onPress} style={style.button} right={<Icon name="arrowright" size={30} color="#fff" />}>Let's go</ButtonRN>
                    </Animated.View>
                    <Animated.View style={[style.container2, { transform: [{ translateY: state.fadeAnimation2 }] }]}>
                        <Title style={{ marginTop: 30, fontSize: 40 }}>Choose one !</Title>
                        <TextRN style={style.text}>(We will help you gain knowledge that will change your life. Participate )</TextRN>
                        <ButtonRN left={<Icon name="facebook-square" size={30} color="#fff" />} onPress={_loginWithFacebook} style={[style.button, style.buttonFacebook]}>Login with Facebook</ButtonRN>
                        <ButtonRN left={<Icon name="apple1" size={30} color="#fff" />} onPress={_loginWithApple} style={[style.button, style.buttonApple]}>Login with Apple ID</ButtonRN>
                    </Animated.View>
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
};


const style = StyleSheet.create({
    container: {
        flex: .5,
        backgroundColor: '#FFECC7',
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 2,
    },
    container2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFECC7',
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'flex-start',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        elevation: 2
    },
    text: {
        color: 'gray',
        marginBottom: 30
    },
    button: {
        justifyContent: 'center',
        marginTop: 10
    },
    buttonFacebook: {
        backgroundColor: '#1976D2'
    },
    buttonGoogle: {
        backgroundColor: '#C94130',
    },
    buttonApple: {
        backgroundColor: '#000'
    }
})