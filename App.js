import React from 'react';
import { UserProvider } from './src/common/context/userContext';
import { RootStackNavigator } from "./src/navigation";
import { AppProvider} from "./src/common/context/appContext";

export default function App() {
  return (
    <UserProvider>
      <AppProvider>
        <RootStackNavigator />
      </AppProvider>
    </UserProvider>
  );
}



