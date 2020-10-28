import React, { useState } from "react";
import { BackHandler, ToastAndroid, TouchableOpacity, View, Animated, Dimensions,Image } from "react-native";
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/login";
import HomeScreen from "../screens/home";
import DictionaryScreen from "../screens/dictionary";
import NewsScreen from "../screens/news";
import InfoScreen from "../screens/info";
import QuizScreen from "../screens/quiz";
import ExerciseScreen from "../screens/quiz/exercise";
import ResultExeciseScreen from "../screens/quiz/exercise/result";
import NewWordScreen from "../screens/home/newWord";


//Layout
import { ResultAfterNewWords } from "../screens/home/newWord/result";

import Icon from 'react-native-vector-icons/AntDesign';
import { TenLua } from "../assets/image/svg/tenlua";


const StackScreen = createStackNavigator();
export function RootStackNavigator() {
    return (
        <NavigationContainer>
            <StackScreen.Navigator
                initialRouteName='Login'
                screenOptions={{
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureEnabled: false,
                }}>
                <StackScreen.Screen
                    options={{
                        headerShown: false
                    }}
                    component={SplashScreen} name="Splash"
                />
                <StackScreen.Screen
                    options={{
                        headerShown: false
                    }}
                    component={BottomTab} name="Tab"
                />
                <StackScreen.Screen
                    options={{
                        headerShown:false
                    }}
                    component={ExerciseScreen} name="Exercise"
                />
                <StackScreen.Screen
                    options={{
                        headerShown:false
                    }}
                    component={ResultExeciseScreen} name="Result"
                />
                <StackScreen.Screen
                    options={{
                        headerShown:false
                    }}
                    component={NewWordScreen} name="NewWord"
                />
                <StackScreen.Screen
                    options={{
                        headerShown:false
                    }}
                    component={ResultAfterNewWords} name="ResultAfterNewWords"
                />
                <StackScreen.Screen options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }} name="Login" component={LoginScreen} />
            </StackScreen.Navigator>
        </NavigationContainer>
    );
}





// Bottom tab navigation
const Tab = createMaterialTopTabNavigator();
export function BottomTab() {
    let backCount = 0;
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (backCount == 0) {
                    backCount++;
                    ToastAndroid.show("Press again to exit", ToastAndroid.SHORT);
                    setTimeout(() => {
                        backCount = 0
                    }, 2000)
                    return true;
                }
                BackHandler.exitApp()
                return true;
            }
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        }, [])
    );




    const HomeTab = (props) => {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Icon name='home' color={props.focus ? '#FF8811' : 'gray'} size={30} />
            </View>
        );
    }
    const MainTab = (props) => {
        return (
            <View style={{backgroundColor:props.focus?'#0A4267':'#18669B',padding:5,borderRadius:50}}>
                <TenLua />
                {/* <Image source={require('../assets/image/rocketship-2.gif')} style={{width:60,height:60}} /> */}
            </View>
        );
    }

    const DicitonaryTab = (props) => {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Icon name='book' color={props.focus ? '#FF8811' : 'gray'} size={30} />
            </View>
        );
    }

    const NotificationTab = (props) => {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Icon name='bells' size={30} color={props.focus ? '#FF8811' : 'gray'} />
            </View>
        );
    }
    const ProfileTab = (props) => {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Icon name='user' size={30} color={props.focus ? '#FF8811' : 'gray'} />
            </View>
        );
    }

    return (
        <Tab.Navigator initialRouteName='Home'
            lazy
            tabBarPosition='bottom'
            initialLayout={{
                width:Dimensions.get('window').width
            }}
            screenOptions={{
                
            }}
            tabBarOptions={{
                pressColor:'#ff8811',
                showLabel: true,
                showIcon:true,
                activeTintColor: '#FF8811',
                inactiveTintColor: 'gray',
            
                indicatorStyle: {
                    opacity:0
                },
                iconStyle:{
                    justifyContent:'center',
                    alignItems:'center',
                    height:40,
                    width:40,
                },
                labelStyle:{
                    marginHorizontal:0,
                    fontSize:10,
                    textTransform:'capitalize'
                },
                style: {
                    zIndex:999,
                    paddingVertical:3,
                },
                allowFontScaling: false,
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => <HomeTab focus={focused} />
                }}
            />
            <Tab.Screen name="Dictionary" component={DictionaryScreen}
                options={{
                    tabBarLabel: 'Dictionary',
                    tabBarIcon: ({ focused }) => <DicitonaryTab focus={focused} />
                }}
            />
            <Tab.Screen name="Quiz" component={QuizScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => <MainTab focus={focused} />
                }}
            />
            <Tab.Screen name="News" component={NewsScreen}
                options={{
                    tabBarLabel: 'News',
                    tabBarIcon: ({ focused }) => <NotificationTab focus={focused} />
                }}
            />

            <Tab.Screen name="Profile" component={InfoScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => <ProfileTab focus={focused} />
                }}
            />

        </Tab.Navigator>
    )
}