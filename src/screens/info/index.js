import React from "react";
import {
    View,
    StatusBar,
    Image
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Container, Title, Card, TextRN, ButtonIcon } from "../../common/components";
import { UserContext } from "../../common/context/userContext";
import { Item } from "./item";

export default function Info(props) {
    const uContext = React.useContext(UserContext);

    console.log("Hung2", uContext.data);

    return (
        <Container>
            <ScrollView>
                <StatusBar animated={false} translucent backgroundColor="transparent" barStyle={'dark-content'} />
                <View style={{ backgroundColor: '#FFECC7', paddingVertical: '8%', justifyContent: 'center', alignItems: 'center' }}>
                    <Title>Profile</Title>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ borderRadius: 180, elevation: 5 }}>
                        <Image source={{ uri: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2658630597734996&height=200&width=200&ext=1605345420&hash=AeQVc_RzhWDNLv9RzS0' }} style={{ width: 200, height: 200, borderRadius: 180, borderWidth: 1 }} resizeMethod={'resize'} resizeMode={'contain'} />
                    </View>
                    <Card>
                        <Title>Hưng Phạm</Title>
                        <TextRN style={{ fontStyle: 'italic' }}>phamhoaihung2408@gmail.com</TextRN>
                    </Card>
                    <View style={{width:'90%',padding:20,marginVertical:20,elevation:2,borderRadius:10,backgroundColor:'#fff'}}>
                        <Item title={'Your phone'} value={'Chưa cập nhật'}/>
                        <Item title={'DOB'} value={'Chưa cập nhật'}/>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );
}