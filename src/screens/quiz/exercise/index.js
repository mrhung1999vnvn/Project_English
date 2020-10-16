import React, { useEffect, useState } from "react";
import {
    View,
    FlatList, Dimensions,
} from "react-native";
import { ProgressBar } from "@react-native-community/progress-bar-android";

import {
    Container,
    Title,
    Card, ButtonRN
} from "../../../common/components";
import { Icon } from "react-native-vector-icons/AntDesign";

let inn=0;
export default function Example({navigation}) {

    /**
     * status: Trạng thái progress bar
     */
    const [status,set_Status] = useState(false);
    let flatListRefs = React.createRef();

    const _onPress = () => {

        if(inn+1<=DATA.length-1){
            inn++;
        }else{
            inn=0
            navigation.replace('Result',{anw:arr})
            return true;
        }

        flatListRefs.current.scrollToIndex({
            animated:true,
            index:inn
        })
        set_Status(true);
    }

    const MovingBar = (props) => {
        const [progress, setProgress] = useState(0);
        useEffect(() => {
            if(status){
                setProgress(0);

                // Reset Progress bar
                set_Status(false);      
            }
            setInterval(() => {
                setProgress((p) => (p + 0.002) % 1);
            }, 10);
        }, []);
        
        if(parseInt(progress)>=1){
            if(inn+1<=DATA.length-1){
                inn++;
                set_Status(false)
            }
            else{
                inn=0
                navigation.replace('Result',{anw:arr});
                return true;
            }
            flatListRefs.current.scrollToIndex({
                animated:true,
                index:inn
            })
        }
        return <ProgressBar progress={progress} {...props} />;
    };

    return (
        <Container>
            <View style={{ backgroundColor: '#FFECC7', paddingVertical: '8%', justifyContent: 'center', alignItems: 'center' }}>
                <Title>Exercise</Title>
            </View>
            <View>
                <MovingBar styleAttr="Horizontal" indeterminate={false} color="#18669B" />
            </View>
            <FlatList
                ref={flatListRefs}
                horizontal
                initialScrollIndex={0}
                scrollEnabled={false}
                pagingEnabled={true}
                legacyImplementation={false}
                style={{
                    height: '100%',
                    width: Dimensions.get('window').width
                }}
                data={DATA}
                renderItem={({item,index}) => <Item answ={item.answer} onPress={()=>_onPress()} index={index} title={item.title} questions={item.question} />}
                keyExtractor={item => item.idQ}

            />
        </Container>
    );
}

let arr=[];
function Item(props) {
    const [button,set_button]=useState(false);

    const _ChooseAnswer = (indx) =>{
        if(indx === props.answ){
            arr.push(indx);
        }
        set_button(true);
    }

    return (
        <View style={{
            width: Dimensions.get('window').width,
            backgroundColor: '#FCF7EE'
        }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '90%', elevation: 2, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>
                    <Title style={{ marginBottom: 20 }}>{props.title}</Title>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>
                        {props.questions.map((item,index)=>(
                            <Card onPress={()=>_ChooseAnswer(index)} style={{ backgroundColor: '#fff', elevation: 2, borderRadius: 10 }}>
                                <Title style={{ fontSize: 20 }}>{item}</Title>
                            </Card>
                        ))}
                    </View>
                </View>
                {button &&(
                    <ButtonRN onPress={props.onPress} style={{alignSelf:'flex-end',justifyContent:'center',width:'30%',margin:20}}>Next</ButtonRN>
                )}
            </View>
            

        </View>
    )
}


const DATA = [
    {
        idQ: '#1',
        title: 'Apple is ?',
        question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
        answer: 0
    },
    {
        idQ: '#2',
        title: ' is ?',
        question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
        answer: 1,
    },
    {
        idQ: '#3',
        title: 'Apple is ?',
        question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
        answer: 2
    },
    {
        idQ: '#4',
        title: 'Apple is ?',
        question: ['A. Quả táos', 'B. Quả chanhs', 'C. Quả chùm ruộts', 'D. Quả nhos'],
        answer: 3
    },
    {
        idQ: '#5',
        title: 'Apple is ?',
        question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
        answer: 1
    },
]