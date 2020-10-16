import React from "react";
import { Container,Card, TextRN,Title } from "../../common/components";
import Icon from 'react-native-vector-icons/AntDesign';


export function Item(props) {
    return(
        <Card style={{
           backgroundColor:'#79BBF9',
           flexDirection:'row',
           justifyContent:'space-between',
           paddingHorizontal:30,
           marginHorizontal:10 
        }}>
            <Title style={{color:'#fff'}}>{props.word}</Title>
            <Icon name="right" size={20}/>
        </Card>
    );
}