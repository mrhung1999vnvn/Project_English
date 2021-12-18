import React, {useState} from 'react';
import {setUser, clearAll} from '../db/user';

export const UserContext = React.createContext();
export function UserProvider(props) {
  const initUser = {
    accountId: '',
    name: '',
    avatar: ' ',
    phone: '',
    email: '',
    gender: '',
    birthday: '',
  };

  const [userData, set_userData] = useState(initUser);

  const logout = () => {
    set_userData(initUser);
    clearAll();
  };

  const store = {
    data: userData,
    setData: (input) => {
      set_userData((oldStates) => ({...oldStates, ...input}));
      setUser(input);
    },
    logout: () => logout(),
  };

  return (
    <UserContext.Provider value={store}>{props.children}</UserContext.Provider>
  );
}
