import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
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




const style = StyleSheet.create({
    button1: {
        width: '90%',
        flexDirection:'row',
        minHeight: 60,
        alignSelf:'center',
        alignItems: 'center',
        padding: 10,
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
    text1: {
        color: '#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 20,
        marginHorizontal:10,
    }
});