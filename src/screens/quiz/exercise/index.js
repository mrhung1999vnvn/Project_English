import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  BackHandler,
  Image,
  Animated,
} from 'react-native';
import {
  Container,
  Title,
  ButtonRN,
  TextRN,
  ButtonFlat,
  Card,
} from '../../../common/components';

import {ProgressBar} from '@react-native-community/progress-bar-android';
import {useFocusEffect} from '@react-navigation/native';
import {DICTIONARY_1} from '../../../../dictionary.json';
import {AppContext} from '../../../common/context/appContext';

let inn = 0;
export default function Example({navigation, route}) {
  const dContext = React.useContext(AppContext);
  const dataRoute = route.params
    ? route.params.data[route.params.data.length - 1]
    : dContext.dictionary.data;
  /**
   * status: Trạng thái progress bar
   */
  const [status, set_Status] = useState(false);
  const [exitStates, set_exitStates] = useState(false);
  const [showAnimAlert, set_showAnimAlert] = useState(new Animated.Value(0));

  let flatListRefs = React.createRef();

  const _onPress = () => {
    if (inn + 1 <= DATA.length - 1) {
      inn++;
    } else {
      inn = 0;
      navigation.replace('Result', {anw: arr});
      return true;
    }

    flatListRefs.current.scrollToIndex({
      animated: true,
      index: inn,
    });
    set_Status(true);
  };

  const MovingBar = (props) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      if (status) {
        setProgress(0);

        // Reset Progress bar
        set_Status(false);
      }
      setInterval(() => {
        setProgress((p) => (p + 0.002) % 1);
      }, 10);
    }, []);

    if (parseInt(progress) >= 1) {
      if (inn + 1 <= DATA.length - 1) {
        inn++;
        set_Status(false);
      } else {
        inn = 0;
        navigation.replace('Result', {anw: arr});
        return true;
      }
      flatListRefs.current.scrollToIndex({
        animated: true,
        index: inn,
      });
    }
    return <ProgressBar progress={progress} {...props} />;
  };

  const _animShow = () => {
    set_exitStates(true);
    Animated.timing(showAnimAlert, {
      toValue: 1,
      duration: 6000,
      useNativeDriver: true,
    });
  };

  const _animHide = () => {
    set_exitStates(false);
    Animated.timing(showAnimAlert, {
      toValue: 0,
      duration: 6000,
      useNativeDriver: true,
    });
  };

  const _close = () => {
    navigation.navigate('Tab');
  };

  useFocusEffect(
    React.useCallback(() => {
      // alert('asdasdas')
      const onBackPress = () => {
        const _animShow = () => {
          set_exitStates(true);
          Animated.timing(showAnimAlert, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true,
          });
        };
        _animShow();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  // console.log(DICTIONARY_1['anopheles'].question[1])
  return (
    <Container>
      {exitStates && (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,.6)',
            zIndex: 999,
          }}>
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#fff',
              width: '90%',
              elevation: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#0A4267',
                width: '40%',
                borderRadius: 30,
                overflow: 'hidden',
                marginBottom: 20,
              }}>
              <Image
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  height: 100,
                  borderRadius: 90,
                }}
                source={require('../../../assets/image/look.gif')}
                resizeMethod="resize"
                resizeMode="stretch"
              />
            </View>
            <TextRN
              style={{
                fontWeight: 'bold',
                marginBottom: 20,
                color: '#0A4267',
                fontSize: 25,
              }}>
              It's so sad, good bye?
            </TextRN>

            <View
              style={{
                width: '100%',
                borderRadius: 10,
                backgroundColor: 'rgba(255,255,255,.7)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <ButtonFlat
                onPress={_close}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: 'gray',
                }}>
                Exit
              </ButtonFlat>
              <ButtonFlat
                onPress={_animHide}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  backgroundColor: '#0A4267',
                }}>
                Continue
              </ButtonFlat>
            </View>
          </View>
        </View>
      )}
      <View
        style={{
          backgroundColor: '#FFECC7',
          paddingVertical: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Title>Exercise</Title>
      </View>
      <View>
        <MovingBar
          styleAttr="Horizontal"
          indeterminate={false}
          color="#18669B"
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ref={flatListRefs}
        horizontal
        initialScrollIndex={0}
        scrollEnabled={false}
        pagingEnabled={true}
        legacyImplementation={false}
        style={{
          height: '100%',
          width: Dimensions.get('window').width,
        }}
        data={dataRoute.word}
        renderItem={({item, index}) => (
          <Item
            answer={DICTIONARY_1[`${item}`].answer}
            onPress={() => _onPress()}
            questions={DICTIONARY_1[`${item}`].question}
            index={index}
            title={item}
          />
        )}
        keyExtractor={(item) => item.idQ}
      />
    </Container>
  );
}

let arr = [];
function Item(props) {
  const [button, set_button] = useState(false);

  const _ChooseAnswer = (indx) => {
    if (indx === props.answer) {
      arr.push(indx);
    }
    set_button(true);
  };

  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        backgroundColor: '#FCF7EE',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: '90%',
            elevation: 2,
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 10,
          }}>
          <Title style={{marginBottom: 20}}>{props.title}</Title>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {props.questions.map((item, index) => (
              <Card
                onPress={() => _ChooseAnswer(index)}
                style={{
                  backgroundColor: '#fff',
                  elevation: 2,
                  borderRadius: 10,
                }}>
                <Title style={{fontSize: 20}}>{item}</Title>
              </Card>
            ))}
          </View>
        </View>
        {button && (
          <ButtonRN
            onPress={props.onPress}
            style={{
              alignSelf: 'flex-end',
              justifyContent: 'center',
              width: '30%',
              margin: 20,
            }}>
            Next
          </ButtonRN>
        )}
      </View>
    </View>
  );
}

const DATA = [
  {
    idQ: '#1',
    title: 'Apple is ?',
    question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
    answer: 0,
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
    answer: 2,
  },
  {
    idQ: '#4',
    title: 'Apple is ?',
    question: [
      'A. Quả táos',
      'B. Quả chanhs',
      'C. Quả chùm ruộts',
      'D. Quả nhos',
    ],
    answer: 3,
  },
  {
    idQ: '#5',
    title: 'Apple is ?',
    question: ['A. Quả táo', 'B. Quả chanh', 'C. Quả chùm ruột', 'D. Quả nho'],
    answer: 1,
  },
];
