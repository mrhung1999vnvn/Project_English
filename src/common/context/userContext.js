import React, { useState } from "react";


export const UserContext = React.createContext();

export function UserProvider(props) {
    const initUser = {
        accountId:'',
        name:'',
        avatar:'',
        phone:'',
        email:'',
        gender:'',
        birthday:'',
    };
    
    const [userData,set_userData]=useState(initUser);

    const logout = () =>{
        set_userData((oldStates)=>({...oldStates,...initUser}));
    }

    const store ={
        data:userData,
        setData:(input)=>{
            set_userData((oldStates)=>({...oldStates,...input}));
        },
        logout:()=>logout()
    }

    return(
        <UserContext.Provider value={store}>
            {props.children}
        </UserContext.Provider>
    )
}