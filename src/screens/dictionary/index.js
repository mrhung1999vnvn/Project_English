import React, { useEffect, useState } from "react";
import { View, Text,TouchableWithoutFeedback,KeyboardAvoidingView, Keyboard } from "react-native";
import { Container, Title, TextInputRN, ButtonIcon } from "../../common/components";
import Icon from 'react-native-vector-icons/AntDesign';
import { Item } from "./item";
import { FlatList } from "react-native-gesture-handler";

export default function Dictionary() {
    const [state, set_State] = useState({
        search: '',
    });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'} enabled>
                <Container>
                    <View style={{ backgroundColor: '#FFECC7', paddingVertical: '8%', justifyContent: 'center', alignItems: 'center' }}>
                        <Title>Dictionary</Title>
                    </View>
                    <TextInputRN
                        onFocus={true}
                        onChangeText = {(value)=>set_State((oldState)=>({...oldState,search:value}))}
                        style={{marginHorizontal:10,marginVertical:20}} placeholder={'Điền từ cần tìm...'}
                        right={
                        <ButtonIcon>
                            <Icon name='search1' size={20} color={'black'} />
                        </ButtonIcon>}
                    />
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={DATA}
                        renderItem={(item)=><Item word={item.item.word}/>}
                    />
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    );
}


const DATA = [
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
    {
        id:'#1',
        word:'Apple',
        type:'danh từ',
        mean:'Quả táo, trái táo',
        examples:[
            'Adam \' apples',
            'Apple of discord',
            'Apple of the eye',
            'The apple of Sodom: Dead Sea apple ' 
        ]
    },
]