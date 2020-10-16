import React from 'react';
import { UserProvider } from './src/common/context/userContext';
import { RootStackNavigator } from "./src/navigation";
import { BackHandler, ToastAndroid } from "react-native";


export default function App() {
  return (
    <UserProvider>
      <RootStackNavigator />
    </UserProvider>
  );
}



