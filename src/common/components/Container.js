import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";


export function Container(props) {
    return(
        <SafeAreaView style={[{
            flex:1,
            width:'100%',
            backgroundColor:'#fff'
        },props.style]}>
            {props.children}
        </SafeAreaView>
    );
}

export function Card(props) {
    return(
        <TouchableOpacity 
        onPress={props.onPress}
        style={[{
            padding:10,
            borderRadius:20,
            marginVertical:5,
            justifyContent:'center',
            alignItems:'center'
        },props.style]}>
            {props.children}
        </TouchableOpacity>
    );
}