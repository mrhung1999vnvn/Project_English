import React from "react";
import {TextInput,View,StyleSheet} from "react-native";


export function TextInputRN(props) {
    return(
        <View style={[
            {
              marginHorizontal: 3,
              marginVertical: 6,
              alignItems: "center",
              justifyContent:'center',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 50,
              height: 60,
              flexDirection: "row",
              borderColor: 'gray',
              borderWidth:0,
              elevation:2
            },
            props.style,
          ]}>
            {props.left}
            <TextInput 
                onSubmitEditing={props.onSubmitEditing}
                onFocus={props.onFocus}
                multiline={props.multiline}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ flex: 1, height: 40, marginHorizontal: 8,color:'#000',fontSize:20 }}
                keyboardType={props.keyboardType}
                editable={props.editable}
            />
            {props.right}
        </View>
    );
}