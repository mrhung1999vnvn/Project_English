import React, { useEffect } from "react";
import { View,Text,StatusBar,Image} from "react-native";
import { Container,ButtonRN, Title } from "../../common/components";
import { UserContext } from "../../common/context/userContext";



export default function Home() {
    const uContext = React.useContext(UserContext);
    return(
        <Container style={{backgroundColor:'#FCF7EE'}}>
           <StatusBar animated={false} translucent backgroundColor="transparent" barStyle={'dark-content'} />
            <View style={{flex:.1,justifyContent:'center', alignItems:'center',marginVertical:'10%',backgroundColor:'transparent',borderBottomLeftRadius:50}}>
                <Title style={{backgroundColor:'#FFECC7',width:'30%',padding:10,borderRadius:50,elevation:2,textAlign:'center'}}>Sunen</Title>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image resizeMethod={'resize'} resizeMode={'contain'} style={{marginBottom:80}} source={require('../../assets/image/intro.png')}/>
                <ButtonRN style={{backgroundColor:'#FF8811',justifyContent:'center'}}>
                    New word today
                </ButtonRN>
            </View>
        </Container>
    );
}