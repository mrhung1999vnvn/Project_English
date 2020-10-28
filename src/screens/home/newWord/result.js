import React, { useEffect, useState } from "react";
import {
    View,
    FlatList, Dimensions,
    Text
} from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";

import {
    Container,
    Title,
    Card, ButtonRN,
    TextRN
} from "../../../common/components";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon  from "react-native-vector-icons/AntDesign";
import { DictionaryContext } from "../../../common/context/dictionaryContext";


export function ResultAfterNewWords({ navigation }) {

    // const dContext = React.useContext(DictionaryContext);
    // console.log(dContext);
    return (
        <Container>
            <View style={{height:'15%',justifyContent:'center',paddingHorizontal:30}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Tab')} style={{flexDirection:'row'}}>
                    <Icon name="arrowleft" size={40} color={'#FF8811'} />
                    <Text style={{fontSize:25,color:'#FF8811',fontWeight:'bold'}}> Exit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Title style={{textAlign:'center'}}>Do you want to study?</Title>
                <View style={{ marginHorizontal: 30, marginVertical: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <TextRN style={{ fontSize: 20, color: 'gray', marginBottom: 30, textAlign: 'center' }}>You will get 30 seconds for 10 question from your pocket you have saved</TextRN>
                </View>
                <ButtonRN style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('Exercise')}>Press to start !</ButtonRN>
            </View>
        </Container>
    );
}