import React from "react";
import { Image,View,ToastAndroid,BackHandler } from "react-native";
import { Container, Title,TextRN, ButtonRN } from "../../../common/components";

import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { HistoryContext } from "../../../common/context/historyContext";
import { AppContext } from "../../../common/context/appContext";


export default function Result({navigation,route}) {
    let backCount = 0;
    const answers = route.params.anw;
    const hContext = React.useContext(AppContext)

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (backCount == 0) {
                    backCount++;
                    ToastAndroid.show("Press again to exit", ToastAndroid.SHORT);
                    setTimeout(() => {
                        backCount = 0
                    }, 2000)
                    return true;
                }
                BackHandler.exitApp()
                return true;
            }
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        }, [])
    );

    return(
        <Container>
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fff'
            }}>
                <Image  style={{width:400,height:400}} resizeMethod={'resize'} resizeMode={'contain'} source={require('../../../assets/image/medal.gif')} />
                <Title style={{color:'#000',fontSize:35,marginBottom:20}}>Congratulation!</Title>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:60}}>
                    <TextRN style={{fontWeight:'bold',fontSize:20,marginBottom:10}}>Your Result: </TextRN>
                    <TextRN style={{fontSize:30,fontWeight:'bold'}}>{route.params.anw.length}/5 </TextRN>
                </View>
                <ButtonRN onPress={()=>navigation.navigate('Home')} style={{justifyContent:'center'}}>Back Home</ButtonRN>
            </View>
        </Container>
    );
}