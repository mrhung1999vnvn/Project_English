import React from "react";
import { 
    View,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Image
} from "react-native";

import { 
    Container,
    TextRN,
    Title,
    ButtonRN
 } from "../../common/components";


export default function Quiz({navigation}) {
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'height'} enabled>
                <Container>
                    <View style={{ backgroundColor: '#FFECC7', paddingVertical: '8%', justifyContent: 'center', alignItems: 'center' }}>
                        <Title>Quiz</Title>
                    </View>
                    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                        <Image source={require('../../assets/image/quiz.png')} resizeMode={'contain'} resizeMethod={'resize'}/>
                        <View style={{marginHorizontal:30,marginVertical:30,justifyContent:'center',alignItems:'center'}}>
                            <TextRN style={{fontSize:20,color:'gray',marginBottom:30,textAlign:'center'}}>You will get 30 seconds for 10 question from your pocket you have saved</TextRN>
                        </View>
                        <ButtonRN style={{justifyContent:'center'}} onPress={()=>navigation.navigate('Exercise')}>Press to start !</ButtonRN>
                    </View>
                </Container>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}