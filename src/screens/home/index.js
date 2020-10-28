import React, { useEffect, useState } from "react";
import { View,Text,StatusBar,Image} from "react-native";
import { Container,ButtonRN, Title,TextRN } from "../../common/components";
import { useIsFocused } from '@react-navigation/native';


export default function Home({navigation}) {
    const [loading,set_loading]=useState(false);

    const _onPress = () =>{
        setTimeout(()=>{
            navigation.navigate('NewWord')
            set_loading(false);
        },2000)
        set_loading(true);
    }

    const isFocused=useIsFocused();

    return(
        <Container style={{backgroundColor:'#FCF7EE'}}>
            {loading && isFocused && (
                    <View style={{position:'absolute',justifyContent:'center',alignItems:'center',top:0,left:0,right:0,bottom:0,backgroundColor:'rgba(255,255,255,.9)',zIndex:999}}>
                        <Image source={require('../../assets/image/ball-loading.gif')} resizeMethod={'resize'} resizeMode={'contain'}/>
                        <TextRN>Loading...</TextRN>
                    </View>
            )}
           <StatusBar animated={false} translucent backgroundColor="transparent" barStyle={'dark-content'} />
            <View style={{flex:.1,justifyContent:'center', alignItems:'center',marginVertical:'10%',backgroundColor:'transparent',borderBottomLeftRadius:50}}>
                <Title style={{backgroundColor:'#FFECC7',width:'30%',padding:10,borderRadius:50,elevation:2,textAlign:'center'}}>Sunen</Title>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',zIndex:1}}>
                <Image resizeMethod={'resize'} resizeMode={'contain'} style={{marginBottom:80}} source={require('../../assets/image/intro.png')}/>
                <ButtonRN onPress={_onPress} style={{backgroundColor:'#FF8811',justifyContent:'center'}}>
                    New word today
                </ButtonRN>
            </View>
        </Container>
    );
}