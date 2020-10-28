import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { TextRN } from "./Text";

export function ButtonRN(props) {
    return (
        <TouchableOpacity
            {...props}
            onPress={props.onPress}
            style={[style.button1,props.style]}>
            {props.left}
                <TextRN style={style.text1}>{props.children}</TextRN>
            {props.right}
        </TouchableOpacity>
    );
}

export function ButtonIcon(props) {
    return(
        <TouchableOpacity
            {...props}
            onPress={props.onPress}
            activeOpacity={0.2}
            style={[
                {
                    alignItems: "center",
                    justifyContent: "center",
                },
                props.style,
            ]}
         >
      {props.children}
    </TouchableOpacity>

    );
}

export function ButtonFlat(props) {
    return(
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.2}
            style={[style.button2,props.style]}
        >
            <TextRN style={[{fontWeight:'bold',fontSize:20,color:'#fff'},props.styleText]}>{props.children}</TextRN>
        </TouchableOpacity>
    );
}




const style = StyleSheet.create({
    button1: {
        flexDirection:'row',
        minHeight: 60,
        alignSelf:'center',
        alignItems: 'center',
        padding: 10,
        margin:10,
        backgroundColor: '#FF8811',
        borderRadius: 50,
        elevation: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    button2:{
        flexDirection:'row',
        minHeight: 60,
        alignSelf:'center',
        alignItems: 'center',
        padding: 10,
        margin:10,
        backgroundColor: '#FF8811',
        borderRadius: 10,
        elevation: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 5,
    },
    text1: {
        color: '#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        marginHorizontal:10,
    }
});