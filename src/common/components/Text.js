import React from "react";
import {StyleSheet, Text} from "react-native";

export function TextRN(props) {
    return(
        <Text style={[{fontSize:15},props.style]}>{props.children}</Text>
    );
}

export function Title(props) {
    return(
        <Text style={[style.title,props.style]}>{props.children}</Text>
    );
}


const style = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:30,
    }
})